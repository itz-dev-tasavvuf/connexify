import { Button } from '@/components/ui/button';
import { Users, Lightbulb, Target, Award } from 'lucide-react';
import Link from 'next/link';
import GradientText from '@/components/GradientText';
import TiltedCard from '@/components/TiltedCard';
import TextPressure from '@/components/TextPressure';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
              >
                Connect, Collaborate & Grow Together
              </GradientText>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              India's premier platform for startups, investors, and mentors to network,
              collaborate, and accelerate growth.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" asChild>
                <Link href="/auth/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/roles">Explore Roles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose StartupConnect?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <TiltedCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Co-Founder Matching"
              description="Find the perfect co-founder with our AI-driven matching system based on skills and goals."
              containerHeight="300px"
              containerWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-center">
                  <Users className="h-10 w-10 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Co-Founder Matching</h3>
                  <p>Find the perfect co-founder with our AI-driven matching system.</p>
                </div>
              }
            />
            <TiltedCard
              icon={<Lightbulb className="h-10 w-10 text-primary" />}
              title="Virtual Events"
              description="Participate in virtual pitch events and connect with investors and mentors."
              containerHeight="300px"
              containerWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-center">
                  <Lightbulb className="h-10 w-10 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Virtual Events</h3>
                  <p>Connect with investors and mentors through virtual pitch events.</p>
                </div>
              }
            />
            <TiltedCard
              icon={<Target className="h-10 w-10 text-primary" />}
              title="Resource Hub"
              description="Access curated resources, tools, and insights to help your startup grow."
              containerHeight="300px"
              containerWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-center">
                  <Target className="h-10 w-10 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Resource Hub</h3>
                  <p>Access curated resources and tools for startup growth.</p>
                </div>
              }
            />
            <TiltedCard
              icon={<Award className="h-10 w-10 text-primary" />}
              title="Community"
              description="Join a thriving community of entrepreneurs, share experiences, and learn together."
              containerHeight="300px"
              containerWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-center">
                  <Award className="h-10 w-10 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p>Join a thriving community of entrepreneurs and learn together.</p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Footer Text */}
      <div className="container py-8 text-center">
        <TextPressure
          text="Developed by Tasavvuf"
          textColor="currentColor"
          minFontSize={24}
        />
      </div>
    </main>
  );
}