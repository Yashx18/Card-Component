import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { FigmaIcon, GithubIcon, OpenAIIcon, CursorIcon } from '@/components/icons/icons';

export default function Home() {
  const icons = [FigmaIcon, GithubIcon, OpenAIIcon, CursorIcon];
  
  return (
    <div className="flex min-h-screen items-center justify-center font-sans text-black">
      {/* Card Component */}
      {/* mask-[radial-gradient(circle_at_center,_transparent_0%,_white_100%)] */}
      <Card>
        <CardContent className="flex h-78 items-center overflow-hidden rounded-md bg-[repeating-linear-gradient(135deg,_rgba(0,0,0,0.04)_0px,_rgba(0,0,0,0.04)_8px,_transparent_8px,_transparent_26px)] mask-[radial-gradient(circle,_white_10%,_transparent_90%)]">
          <div className="flex w-full items-center justify-center">
            <div className="animate-infinite-scroll flex items-center gap-4 will-change-transform">
              {[...icons, ...icons, ...icons].map((IconComponent, index) => (
                <div
                  key={index}
                  className="shrink-0 rounded-full border border-neutral-200/40 bg-white p-5 shadow-md"
                >
                  <IconComponent className="size-6" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardHeader className='px-2 pb-2'>
          <CardTitle className="mb-1 text-xl">Tool list card</CardTitle>
          <CardDescription>
            A card that showcases a set of tools that you use on a daily basis.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
