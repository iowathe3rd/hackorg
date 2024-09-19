import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-4">
          Hackorg
          <span className="block text-primary">With Ease</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-300 sm:mt-3 sm:max-w-xl sm:mx-auto">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et ad, consectetur, voluptates tenetur veritatis recusandae magnam officia vero officiis doloribus provident saepe aliquid voluptate rerum odit quasi tempora soluta.        </p>
        <div className="mt-4 sm:mt-6">
          <Button size="lg" className="rounded-full px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Start Designing for Free
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full filter blur-2xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary rounded-full filter blur-2xl opacity-20"></div>
    </div>
  )
}