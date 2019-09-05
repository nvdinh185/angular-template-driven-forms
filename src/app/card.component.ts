import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    template: `
        <div class="card">
        <!-- Nếu không có tham số thì hiển thị cái này -->
        <ng-content></ng-content>

        <!-- Nếu có tham số thì hiển thị cái này 
            Cái nào có class là .card-header sẽ hiển thị ở trên
            Cái nào có class là .card-body sẽ hiển thị ở dưới
        -->
        <div class="header">
                <ng-content select=".card-header"></ng-content>
            </div>
            <div class="body">
                <ng-content select=".card-body"></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .card {
            padding: 5px;
            margin: 5px;
            background: #fff;
            border-radius: 2px;
            display: inline-block;
            width: 300px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }

        .header{
            background: gray;
        }
    `]
})

export class CardComponent { }