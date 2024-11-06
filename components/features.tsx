import { Badge } from "@/components/ui/badge";

export const Features = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-center justify-center text-center">
          <div>
            <Badge className="bg-ppeach">Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-medium text-pblue">
            What we do
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
            We help our clients stay ahead of the curve and achieve their goals by enhancing businesses with the right software solutions, 
            that can help them unlock their full potential and achieve lasting success in this digital age.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl tracking-tight text-pblue">Websites</h3>
            <p className="text-muted-foreground text-base">
            Beautifully crafted websites for your brand or business.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl tracking-tight text-pblue">Web & Email Hosting</h3>
            <p className="text-muted-foreground text-base">
            Online presence for your brand or business.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2"></div>
            <h3 className="text-xl text-pblue tracking-tight">Custom Software Development</h3>
            <p className="text-muted-foreground text-base">
            Custom or off-shelf enterprise software solutions to enhance your business operations
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);