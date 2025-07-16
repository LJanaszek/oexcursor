import { NextRequest, NextResponse } from "next/server";
import userJson from "@/data/data.json"
export type ResponseData = {
    login?: string;
    email?: string | null;
    imie?: string;
    nazwisko?: string;
    opis?: string | null;
    nazwa?: string;
    lp?: number;
    id?: number
};

export async function GET(request: NextRequest) {
    try {
        const userData: ResponseData[] = userJson.data;
        return NextResponse.json(userData);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Wystąpił błąd podczas pobierania danych.' }, { status: 500 });
    }
}