import { Module } from '@nestjs/common';
import { CaslAbilityFactory } from './casl-ability.factory';


@Module({
    controllers: [],
    providers: [CaslAbilityFactory],
    exports:[CaslAbilityFactory]
  })

export class CaslModule {}
