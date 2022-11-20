import React from 'react';
import EditCategoriesSkillsFields from '../../forms/EditCategoriesSkillsFields/EditCategoriesSkillsFields';

export const TestPage = () => {
    return (
        <div>
            <EditCategoriesSkillsFields form={undefined} values={undefined} fetchCategoriesInProgress={false} fetchCategoriesError={''} categories={[]} fetchSkillsInProgress={false} fetchSkillsError={''} skills={[]} handleCategoryChange={undefined} selectedCategory={''} />
        </div>
    );
}