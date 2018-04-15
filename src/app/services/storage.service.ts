import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    itemsKey = 'items';
    commentsKey = 'comments';

    // items

    getItems() {
        return this.checkExistenceItem() ? JSON.parse(localStorage.getItem(this.itemsKey)) : [];
    }

    checkExistenceItem() {
        return localStorage.getItem(this.itemsKey) != null;
    }


    saveItems(items: string[]) {
        localStorage.setItem(this.itemsKey, JSON.stringify(items));
    }

    getComments() {
        return this.checkExistenceComment() ? JSON.parse(localStorage.getItem(this.commentsKey)) : [];
    }

    checkExistenceComment() {
        return localStorage.getItem(this.commentsKey) != null;
    }

    saveComments(comments: string[]) {
        localStorage.setItem(this.commentsKey, JSON.stringify(comments));
    }
}