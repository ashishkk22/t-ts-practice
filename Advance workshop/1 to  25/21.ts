//Class implementation following the builder pattern

//this can pattern can be used to make really nice api and it fits well with typescript
/**
 * class BuilderTuple<TList extends any[] = []> {
  list: TList;
  constructor() {
    this.list = [] as any;
  }

  push<TItem extends string | number | boolean>(
    item: TItem
  ): BuilderTuple<[...TList, TItem]> {
    this.list.push(item);
    return this as any;
  }
}
 */

export class BuilderTuple<TList extends any[] = []> {
  list: TList;

  constructor() {
    this.list = [] as any;
  }

  push<TItem extends string | number | boolean>(
    item: TItem
  ): BuilderTuple<[...TList, TItem]> {
    this.list.push(item);
    return this as any;
  }

  unshift<TItem extends string | number | boolean>(
    item: TItem
  ): BuilderTuple<[TItem, ...TList]> {
    this.list.unshift(item);
    return this as any;
  }
}

//list before push
const builderBeforePush = new BuilderTuple();
const listBeforePush = builderBeforePush.list;

//list after push
const builderAfterPush = builderBeforePush.push(1).unshift(22).push(2).push(3);
const listAfterPush = builderAfterPush.list;
