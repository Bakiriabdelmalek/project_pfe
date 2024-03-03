import { Injectable } from "@nestjs/common";

@Injectable()
export class Utils {
  
    parseJson(response: string): any[] {
    const jsonRegex = /\{[\s\S]*?\}/g;

    let match;
    const parsedObjects = [];
    while ((match = jsonRegex.exec(response)) !== null) {
      try {
        console.log('match');
        const jsonObj = JSON.parse(match[0]);
        parsedObjects.push(jsonObj);
      } catch (error) {
        console.error('Failed to parse JSON:', error);
      }
    }
    return parsedObjects;
  }
}