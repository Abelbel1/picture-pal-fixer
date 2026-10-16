import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function ServiceGallery({ images, title }: { images: string[]; title: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const image = selected === null ? undefined : images[selected];
  const move = (step: number) => setSelected((current) => current === null ? null : (current + step + images.length) % images.length);
  return <>
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
      {images.map((src, index) => <Button key={src} variant="ghost" onClick={() => setSelected(index)} aria-label={`Deschide fotografia ${index + 1}`} className="group relative h-auto w-full aspect-square overflow-hidden rounded-md p-0"><img src={src} alt={`${title} — lucrarea ${index + 1}`} loading={index < 4 ? "eager" : "lazy"} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /></Button>)}
    </div>
    <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
      <DialogContent aria-describedby={undefined} className="w-[calc(100%-1rem)] max-w-5xl gap-2 rounded-md border-border bg-background p-3 pt-10" onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {image && <img src={image} alt={`${title} — fotografia ${(selected ?? 0) + 1}`} className="mx-auto max-h-[70dvh] w-full object-contain" />}
        <div className="flex items-center justify-between"><Button variant="ghost" size="icon" aria-label="Fotografia precedentă" onClick={() => move(-1)}><ChevronLeft /></Button><span className="text-sm text-muted-foreground">{(selected ?? 0) + 1} / {images.length}</span><Button variant="ghost" size="icon" aria-label="Fotografia următoare" onClick={() => move(1)}><ChevronRight /></Button></div>
      </DialogContent>
    </Dialog>
  </>;
}
