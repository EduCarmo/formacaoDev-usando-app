import { NextRequest, NextResponse } from "next/server";

export function GET() {
    return NextResponse.json([
        {id: 1, nome: 'PC Gamer', preco: 5489.0, data: new Date()},
        {id: 2, nome: 'Notebook Gamer', preco: 12578.0, data: new Date()},
        {id: 3, nome: 'Smartphone', preco: 1200.0, data: new Date()},
        {id: 4, nome: 'Tablet', preco: 3529.0, data: new Date()},
        {id: 5, nome: 'Monitor', preco: 599.0, data: new Date()},
        {id: 6, nome: 'Impressora', preco: 3541.0, data: new Date()},
        {id: 7, nome: 'Mouse', preco: 150.0, data: new Date()},
        {id: 8, nome: 'Teclado', preco: 120.0, data: new Date()},
        {id: 9, nome: 'Caixa de Som', preco: 3580.0, data: new Date()},
        {id: 10, nome: 'Caixa de Som', preco: 1358.0, data: new Date()},
    ]);
}