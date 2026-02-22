"use server";

import { createClient } from '@supabase/supabase-js';
import { auth } from '@clerk/nextjs/server';

export async function submitRating(projectId: string, rating: number) {
    try {
        const { userId, getToken } = await auth();

        if (!userId) {
            throw new Error("Unauthorized");
        }

        const token = await getToken({ template: 'supabase' });
        if (!token) {
            throw new Error("Missing Supabase JWT from Clerk. Ensure 'supabase' template is set up.");
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                global: {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            }
        );

        const { error: insertError } = await supabase
            .from('star_review')
            .upsert(
                { project_id: projectId, user_id: userId, rating },
                { onConflict: 'user_id, project_id' }
            );

        if (insertError) {
            console.error("Supabase insert error:", insertError.message);
            return { success: false, error: "Failed to insert rating" };
        }

        return { success: true, projectId, rating };
    } catch (error: any) {
        console.error("Error submitting rating:", error);
        return { success: false, error: error.message || "Failed to submit rating" };
    }
}

export async function getAverageRating(projectId: string) {
    try {
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const { data, error } = await supabase
            .from('star_review')
            .select('rating')
            .eq('project_id', projectId);

        if (error) {
            console.error("Error fetching ratings:", error.message);
            return { average: 0, count: 0 };
        }

        if (!data || data.length === 0) {
            return { average: 0, count: 0 };
        }

        const sum = data.reduce((acc, curr) => acc + curr.rating, 0);
        const average = sum / data.length;

        return { average, count: data.length };
    } catch (error) {
        console.error("Error in getAverageRating:", error);
        return { average: 0, count: 0 };
    }
}
