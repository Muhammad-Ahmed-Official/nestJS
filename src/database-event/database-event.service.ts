import { Injectable, OnModuleInit, OnApplicationShutdown} from '@nestjs/common';

@Injectable()
export class DatabaseEventService {
    private isConnected = false;

    OnModuleInit(){
        this.isConnected = true;
        console.log("Database connected")
    }

    OnApplicationShutdown(signal:string){
        this.isConnected = false;
    }

    getStatus(){
        return this.isConnected ? "Connected" : "Disconnected"
    }
}