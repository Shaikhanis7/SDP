import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '../ui/input';
import { FileText, PlusCircle, X } from 'lucide-react';

const Profile: React.FC = () => {
    const [resume, setResume] = useState<File | null>(null);
    const [skills, setSkills] = useState<string[]>(['JavaScript', 'React']);
    const [newSkill, setNewSkill] = useState('');

    const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleAddSkill = () => {
        if (newSkill && !skills.includes(newSkill)) {
            setSkills([...skills, newSkill]);
            setNewSkill('');
        }
    };

    const handleRemoveSkill = (skillToRemove: string) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    return (
        <div className='p-6'>
            <Card className='mb-6'>
                <CardHeader>
                    <CardTitle className='text-lg font-bold text-primary flex items-center gap-2'>
                        <FileText size={24} className='text-primary' />
                        Profile
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='mb-6'>
                        <label className='block text-sm font-bold mb-2 text-primary flex items-center gap-2'>
                            <FileText size={20} />
                            Upload Resume
                        </label>
                        <input
                            type='file'
                            id='resume'
                            accept='.pdf,.doc,.docx'
                            onChange={handleResumeChange}
                            className='block w-full text-gray-600 border border-gray-300 rounded p-2'
                        />
                        {resume && <p className='mt-2 text-gray-600'>Selected file: {resume.name}</p>}
                    </div>
                    <div>
                        <label className='block text-sm font-bold mb-2 text-primary flex items-center gap-2'>
                            <PlusCircle size={20} />
                            Skills
                        </label>
                        <div className='mb-4'>
                            <Input
                                type='text'
                                id='skills'
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                placeholder='Enter a new skill'
                                className='w-full mb-2 border border-gray-300 rounded p-2'
                            />
                            <Button onClick={handleAddSkill} className='bg-primary text-primary-foreground flex items-center gap-2'>
                                <PlusCircle size={16} />
                                Add Skill
                            </Button>
                        </div>
                        <div>
                            <ul className='list-disc pl-5 space-y-2'>
                                {skills.map(skill => (
                                    <li key={skill} className='flex justify-between items-center'>
                                        <span>{skill}</span>
                                        <Button
                                            onClick={() => handleRemoveSkill(skill)}
                                            className='text-red-500 hover:bg-red-100 flex items-center gap-2'
                                        >
                                            <X size={16} />
                                            Remove
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Profile;
