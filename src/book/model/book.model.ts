import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


@Schema()
@ObjectType()  // whatever i make class treat as graphql object
export class Book extends Document {  // use Document to treat as mongoose Doc
    @Field(() => ID)
    declare readonly _id: Types.ObjectId;

    @Prop({ required: true })
    @Field()
    title: string;

    @Prop()
    @Field({ nullable: true }) // also optional for graphql
    description?: string;
    
    @Prop({ required: true })
    @Field()
    author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book); // convert into schema named book