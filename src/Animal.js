import React from 'react';

    class Student extends Human{
            name;
            job;
            skills=[];
        getJob(x){
            this.job= x ;
        }    
        
        leaveJob(){
            this.job="unemployed";
        }
        learnNewSkill(x){
            this.skills.push=x;
        }
        forgetSkill(){
            this.Skills= skills.pop();
        }

         }
         console.log(skills);     


export default Student
console.log(this.job("unemployed"));
