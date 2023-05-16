import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cards } from './cards/cards.entity';
import { CardsModule } from './cards/cards.module';
import { AuthsModule } from './auth/auth.module';
import { Auths } from './auth/auth.entity';
import { ImagesModule } from './images/images.module';
import { Images } from './images/images.entity';
import { HttpModule } from '@nestjs/axios';
import { CarouselItems } from './carousels/carouselItems.entity';
import { CarouselItemsModule } from './carousels/carouselItems.module';
import { ArticlesModule } from './articles/articles.module';
import { PapersModule } from './papers/papers.module';
import { Papers } from './papers/papers.entity';
import { Articles } from './articles/articles.entity';


@Module({
  imports: [  
      
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'maqrom',
      entities: [Cards, Auths, Images, CarouselItems, Papers, Articles],
      synchronize: true, /* Desactivar cuando pase a modo produccion */
    }),
    HttpModule,
    CardsModule,
    AuthsModule,
    ImagesModule,
    CarouselItemsModule,
    ArticlesModule,
    PapersModule
  ],
  controllers: [
    AppController ,
    
  ],
  providers: [AppService],
})
export class AppModule {
 

}
