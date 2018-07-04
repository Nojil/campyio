import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'participantStatus'})
export class ParticipantStatusPipe implements PipeTransform {
  transform(value: number): string {
    const statusDict = {
      0: 'Pending',
      1: 'Registered',
      2: 'Completed'
    };
    return statusDict[value] || 'Error';
  }
}
