import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class CreateBookInput {
    @Field() // must be field of grphql 
    @IsString()
    @IsNotEmpty()
    title: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    description?: string;

    @Field()  
    @IsString()
    @IsNotEmpty()
    author: string
}