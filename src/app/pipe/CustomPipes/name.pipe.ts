import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byName'
})
export class NamePipe implements PipeTransform {

  transform(media: any, term: any): any {
    //check if search term is empty
    if (term === (undefined||null||"")) {
      return media;
    }
    else {
      return media.filter(
        (medium) => { return medium.name.toLowerCase().includes(term.toLowerCase()); }
      );
    }
  }

}
