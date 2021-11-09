import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EmrEncounter } from "../../emr-encounter/entities/emr-encounter.entity";

@Entity()
export class EmrEncounterClass extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    code: string;

    @Column()
    display: string;

    @CreateDateColumn({ type: "timestamptz"})
    createdAt: Date;

    @Column({ nullable: true })
    createdBy?: string;

    @Column({type:"int"})
    status: string;

    @UpdateDateColumn({ type: "timestamptz"})
    updatedAt: Date;
    
    @Column({ nullable: true })
    updatedBy?: string;

    @DeleteDateColumn({ type: "timestamptz"})
    deletedDate: Date;

    @OneToOne(() => EmrEncounter, emrEncounter => emrEncounter.encounterClass) 
    encounter: EmrEncounter;
}
