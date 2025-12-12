import { IsInt, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    name: string; // string yhn run time par typescript remove kardeta ha 
    @IsInt()
    age: number;
}

// class validator provide buildIn decorator like isEmail, isPassword etc and it is do class instances not on object 
// convert json in to class instance so class validator can validate so we use class transformer