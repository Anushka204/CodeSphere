import fs from "fs/promises"
import { readTemplateStructureFromJson ,saveTemplateStructureToJson} from "@/features/playground/lib/path-to-json"
import path from "path"
import { NextRequest } from "next/server"
import { templatePaths } from "@/lib/template"
import { db } from "@/lib/db"

function validateJsonStructure(data:unknown):boolean{
    try{
        JSON.parse(JSON.stringify(data));
        return true;
    } catch(error){
        console.error("Invalid JSON structure:", error);
        return false;
    }
}

export async function GET(
    request:NextRequest,
    {params}:{params:Promise<{id:string}>}
){
    const {id}=await params;

    if(!id){
        return Response.json({error:"Missing playground ID"},{status:400});
    }
    const playground=await db.playground.findUnique({
        where:{
            id,
        },
    });
    if(!playground){
        return Response.json({error:"Playground not found"},{status:400});
    }
    const templateKey=playground.template as keyof  typeof templatePaths;
    const templatePath=templatePaths[templateKey];

    if(!templatePath){
        return Response.json({error:"Template not found"},{status:400});
    }
    try {
        const inputPath=path.join(process.cwd(),templatePath);
        const outputFile=path.join(process.cwd(),`output/${templateKey}.json`)

        await saveTemplateStructureToJson(inputPath,outputFile);
        const result=await readTemplateStructureFromJson(outputFile);
        if(!validateJsonStructure(result.items)){
            return Response.json({error:"Invalid JSON structure"},{status:500});
        }
        await fs.unlink(outputFile);
        return Response.json({success:true,templateJson:result},{status:200});
    } catch (error) {
        console.error("Error generating template JSON:",error);
        return Response.json({error:"Error generating template JSON"},{status:500}); 
    }
}