

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SideNavMessageService {
    private subject = new Subject<{ id: String, topic: String, data?: any }>();

    sendMessage(id, topic, data?) {
        this.subject.next({ id: id, topic: topic, data: data });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}