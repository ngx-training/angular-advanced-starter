# 1 pipes - customer status pipe

$ ng generate pipe customers/customer-status --module customers

## customers/customer-status.pipe.ts

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'customerStatus' })
export class CustomerStatusPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return 'thumb_down';
    }

    return value > 50 ? 'star_rate' : 'thumb_up';
  }
}
```

## customers/customer/customer.component.html

```html
<span><mat-icon>{{customer?.numberOfOrders | customerStatus}}</mat-icon></span>
```
