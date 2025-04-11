import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Rocket,
  Globe2
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container py-8 space-y-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About StartupConnect India</h1>
        <p className="text-xl text-muted-foreground">
          Empowering India's startup ecosystem through collaboration, 
          skill development, and meaningful connections.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To create India's most vibrant startup community by connecting 
                talented individuals, fostering innovation, and providing the 
                resources needed for success.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Globe2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the catalyst that transforms India's startup landscape by 
                enabling meaningful collaborations and fostering a culture of 
                continuous learning.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us?</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Smart Team Formation</h3>
                <p className="text-muted-foreground">
                  Our AI-powered matching system helps you find the perfect team 
                  members based on complementary skills and shared goals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Rocket className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Skill Development</h3>
                <p className="text-muted-foreground">
                  Access curated learning paths, complete challenges, and earn 
                  rewards while building real-world skills.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg">Join Our Community</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}