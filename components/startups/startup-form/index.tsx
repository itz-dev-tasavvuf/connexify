'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormField } from './form-field';
import { SelectField } from './select-field';
import { INDUSTRIES, FUNDING_STAGES } from './constants';
import type { StartupFormProps, StartupFormData } from './types';

export function StartupForm({ onSubmit, loading }: StartupFormProps) {
  const [formData, setFormData] = useState<StartupFormData>({
    name: '',
    description: '',
    industry: '',
    location: '',
    funding_stage: '',
    website: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (field: keyof StartupFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField id="name" label="Startup Name" required>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Enter your startup name"
          />
        </FormField>

        <FormField id="description" label="Description" required>
          <Textarea
            id="description"
            required
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Describe your startup"
            rows={4}
          />
        </FormField>

        <SelectField
          id="industry"
          label="Industry"
          value={formData.industry}
          options={INDUSTRIES}
          placeholder="Select industry"
          required
          onChange={(value) => handleChange('industry', value)}
        />

        <FormField id="location" label="Location">
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleChange('location', e.target.value)}
            placeholder="City, Country"
          />
        </FormField>

        <SelectField
          id="funding_stage"
          label="Funding Stage"
          value={formData.funding_stage}
          options={FUNDING_STAGES}
          placeholder="Select funding stage"
          onChange={(value) => handleChange('funding_stage', value)}
        />

        <FormField id="website" label="Website">
          <Input
            id="website"
            type="url"
            value={formData.website}
            onChange={(e) => handleChange('website', e.target.value)}
            placeholder="https://example.com"
          />
        </FormField>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Creating...' : 'Create Startup'}
        </Button>
      </form>
    </Card>
  );
}