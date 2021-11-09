import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EmrEncounter } from "../../emr-encounter/entities/emr-encounter.entity";

@Entity()
export class EmrEncounterType extends BaseEntity{
    
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    code: string;

    @Column()
    display: string;

    @Column({type:"int"})
    status: string;

    @CreateDateColumn({ type: "timestamptz"})
    createdAt: Date;

    @Column({ nullable: true })
    createdBy?: string;

    @UpdateDateColumn({ type: "timestamptz"})
    updatedAt: Date;
    
    @Column({ nullable: true })
    updatedBy?: string;

    @DeleteDateColumn({ type: "timestamptz"})
    deletedAt: Date;

    @Column({ nullable: true })
    deletedBy?: string;

    @OneToOne(() => EmrEncounter, emrEncounter => emrEncounter.encounterType) 
    encounter: EmrEncounter;
}
