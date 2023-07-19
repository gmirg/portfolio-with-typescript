import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
    findAll(): any {
        return 'findAll funcionando'
    }
    findOne(projectId: string) {
        return `findBook funcionando con projectId: ${projectId}`
    }
}
