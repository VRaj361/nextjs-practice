import { NextResponse } from "next/server"; 

export function GET() {
    
    return NextResponse.json({
        name:'vrajpatel',
        email:'vraj@gmail.com',
        id: '1',
        title: 'vrjfad',
        userId: 'fdsafda'
    })
}

export function POST(req: NextResponse) {
    const data = req.json();

    return NextResponse.json({
        name:'vrajpatel',
        email:'vraj@gmail.com',
        id: '1',
        title: 'vrjfad',
        userId: 'fdsafda'
    })
}

export function PUT() {
    return NextResponse.json({
        name:'vrajpatel',
        email:'vraj@gmail.com',
        id: '1',
        title: 'vrjfad',
        userId: 'fdsafda'
    })
}

export function DELETE() {
    return NextResponse.json({
        name:'vrajpatel',
        email:'vraj@gmail.com',
        id: '1',
        title: 'vrjfad',
        userId: 'fdsafda'
    })
}