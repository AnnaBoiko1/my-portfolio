import { createClient } from '@supabase/supabase-js';
import { useAuth } from '@clerk/nextjs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

export function useStars(projectId: string) {
    const { getToken, userId } = useAuth();

    const setRating = async (rating: number) => {
        if (!userId) {
            console.error('No user ID found');
            return { success: false, error: new Error('Not logged in') };
        }

        // Get token without the template requirement
        const token = await getToken({ template: undefined });

        // Bypass Supabase Auth GoTrue local validation by setting the header on PostgREST
        const options: any = {
            auth: { autoRefreshToken: false, persistSession: false }
        };

        if (token) {
            options.global = {
                headers: { Authorization: `Bearer ${token}` }
            };
        }

        const supabaseSession = createClient(supabaseUrl, supabaseKey, options);

        const existingSession = await supabaseSession
            .from('star_review')
            .select('id')
            .eq('user_id', userId)
            .eq('project_id', projectId)
            .maybeSingle();

        let error;
        if (existingSession.data) {
            const { error: updateError } = await supabaseSession
                .from('star_review')
                .update({ rating })
                .eq('id', existingSession.data.id);
            error = updateError;
        } else {
            const { error: insertError } = await supabaseSession
                .from('star_review')
                .insert({ project_id: projectId, rating, user_id: userId });
            error = insertError;
        }

        if (error) {
            console.error('Rating error:', error.message || JSON.stringify(error));
            return { success: false, error };
        }

        return { success: true };
    };

    const getAvgRating = async () => {
        try {
            // @ts-ignore
            const { getAverageRating } = await import('@/app/actions/rating');
            const { average } = await getAverageRating(projectId);
            return average || 0;
        } catch (e: any) {
            console.error('Fetch error:', e?.message || e);
            return 0;
        }
    };

    return { setRating, getAvgRating };
}
