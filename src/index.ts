class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    //  grab length of collection
    const { length } = this.collection;

    for (let i=0; i<length; i++) {
      for (let j=0; j<length-i-1; j++) {

        // If collection is an array of numbers
        if (this.collection instanceof Array) { // type guard
          if (this.collection[j] > this.collection[j+1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j+1];
            this.collection[j+1] = temp;
          }
        }
        // If collection is a string
        if (typeof this.collection == 'string') {
            //
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
