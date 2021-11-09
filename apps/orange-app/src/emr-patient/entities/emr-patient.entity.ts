import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EmrEncounter } from "../../emr-encounter/entities/emr-encounter.entity";


@Entity()
export class EmrPatient extends BaseEntity{

    
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    @Generated("uuid")
    personId: string;

    @Column()
    emrNumber: string;

    @Column()
    birthDate: Date;

    @Column()
    birthDateEstimated: boolean;

    @Column()
    isDead: boolean;

    @Column()
    deathDate: Date;

    @Column()
    isMultiBirth: boolean;

    @Column()
    multiBirth: number;

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

    @OneToOne(() => EmrEncounter, emrEncounter => emrEncounter.patient)
    encounter: EmrEncounter;
}
