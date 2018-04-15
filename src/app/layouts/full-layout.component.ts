import { Component, OnInit } from '@angular/core';

import { StorageService } from '../services/storage.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
    items: string[] = [];
    comments: string[] = [];


    constructor(
        private storageService: StorageService
    ) {}


    ngOnInit() {
        this.items = this.storageService.getItems();
        this.comments = this.storageService.getComments();
    }

    addItem(newItem: string) {
        this.items.push(newItem);
        const itemsEl: string[] = this.storageService.getItems();
        itemsEl.push(newItem);
        this.storageService.saveItems(itemsEl);
    }



    deleteItem(itemEl) {

        let index = this.items.findIndex(i => i == itemEl);
        this.items.splice(index,1);
        this.storageService.saveItems(this.items);
    }

    addComment(newComment: string) {
        if (newComment) {
            this.comments.push(newComment);

            const commentsEl = this.storageService.getComments();
            commentsEl.push(newComment);
            this.storageService.saveComments(this.comments);
        }
    }
}

