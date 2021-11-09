import {Entity, PrimaryGeneratedColumn, Column, Generated, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn, BaseEntity} from "typeorm";
import { EmrEncounterClass } from "../../emr-encounter-class/entities/emr-encounter-class.entity";
import { EmrEncounterType } from "../../emr-encounter-type/entities/emr-encounter-type.entity";
import { EmrPatient } from "../../emr-patient/entities/emr-patient.entity";

@Entity()
export class EmrEncounter extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id: number;


    @Column()
    @Generated("uuid")
    encounterStatusId: string;

    @Column({type: "timestamptz"})
    encounterStatusStart: Date;

    @Column({type: "timestamptz"})
    encounterStatusEnd: Date;

    @Column({type: "timestamptz"})
    encounterClassStart: Date;

    @Column({type: "timestamptz"})
    encounterClassEnd: Date;

    @Column({type: "timestamptz"})
    encounterStart: Date;

    @Column({type: "timestamptz"})
    encounterEnd: Date;

    @Column({type: "decimal"})
    encounterLength: string;

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

    @OneToOne(() => EmrEncounterType, emrEncounterType => emrEncounterType.encounter) 
    @JoinColumn()
    encounterType: EmrEncounterType;

    @OneToOne(() => EmrPatient, emrPatient => emrPatient.encounter) 
    @JoinColumn()
    patient: EmrPatient;

    @OneToOne(() => EmrEncounterClass, emrencounterclass => emrencounterclass.encounter) 
    @JoinColumn()
    encounterClass: EmrEncounterClass;
}
