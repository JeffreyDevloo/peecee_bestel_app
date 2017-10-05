import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterateMap',
  pure: false  // Impure pipe
})
export class MapIteratorPipe implements PipeTransform {
  /**
   * Pipe which iterates over a es6 Map structure
   * Memory consumption will double when using this pipe (the map is kept in memory as well as the returned array from the pipe)
   * Also an impure pipe. Gets called on every cycle update. Be careful with this!
   */
  transform(value: any, args?: any[]): Object[] {
    let returnArray = [];
    value.forEach((entryVal, entryKey) => {
      returnArray.push({
        key: entryKey,
        val: entryVal
      });
      console.log('Pushed!')
    });
    return returnArray;
  }
}
