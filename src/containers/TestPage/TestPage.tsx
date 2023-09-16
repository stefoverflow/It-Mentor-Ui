import React from 'react';
import EditCategoriesSkillsFields from '../../forms/EditCategoriesSkillsFields/EditCategoriesSkillsFields';
import SkillsForm from '../../forms/SkillsForm/SkillsForm';
import { useStore } from '../../stores/store';
import { MentorRegisterDto } from '../../models/mentor-register-dto';

export const TestPage = () => {
    const {
        userStore: { registerMentor },
      } = useStore();
    
      const tryRegisterMentor = async (mentorRegisterData: MentorRegisterDto) => {
        try {
          await registerMentor(mentorRegisterData)
        } catch (error: any) {
          console.log(error);
        }
      }

    return (
        <div>
            <button onClick={() => tryRegisterMentor({
                userName: 'Nenad',
                email: 'nenad@gmail.com',
                password: 'Pa$$w0rd',
                categoryName: 'Web Development'
            })}>Register mentor</button>
        </div>
    );
}