import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { QuantumService } from "@/lib/quantum";

export async function GET(request: Request) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const programSlug = searchParams.get("slug") || "foundation"; // Default to foundation

    try {
        const progress = await QuantumService.getUserCurrentHead(
            session.user.id,
            programSlug
        );
        return NextResponse.json(progress);
    } catch (error) {
        console.error("Error fetching quantum head:", error);
        if (error instanceof Error && error.message === "Program not found") {
            return new NextResponse("Program not found", { status: 404 });
        }
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
