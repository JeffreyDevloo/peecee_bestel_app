import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleCommentComponent } from './article-comment.component';
import { ArticleResolver } from './article-resolver.service';
import { SharedModule } from '../shared';

const articleRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver
    }
  }
]);

@NgModule({
  imports: [
    articleRouting,
    SharedModule
  ],
  declarations: [
    ArticleComponent,
    ArticleCommentComponent,
  ],

  providers: [
    ArticleResolver
  ]
})
export class ArticleModule {}
