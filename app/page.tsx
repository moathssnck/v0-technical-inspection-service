import Link from "next/link"
import { Car, FileText, Shield, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function BioLinksPage() {
  const links = [
    {
      title: "حجز موعد الفحص الفني",
      description: "احجز موعد الفحص الفني الدوري لسيارتك",
      href: "#",
      icon: Car,
      external: true,
    },
    {
      title: "الخدمات والأسعار",
      description: "تعرف على خدماتنا وأسعار الفحص",
      href: "#",
      icon: FileText,
      external: true,
    },
    {
      title: "نتائج الفحص",
      description: "استعلم عن نتيجة فحص سيارتك",
      href: "#",
      icon: Shield,
      external: true,
    },
    {
      title: "تواصل معنا",
      description: "للاستفسارات والدعم الفني",
      href: "#",
      icon: ExternalLink,
      external: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8 max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
            <Car className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-balance">الفحص الفني الدوري</h1>
          <p className="text-sm text-muted-foreground text-balance">خدمة فحص فني متميزة لضمان سلامة مركبتك</p>
        </div>

        {/* Links Grid */}
        <div className="space-y-3 mb-8">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Card key={link.title} className="group hover:shadow-md transition-all duration-200">
                <Link
                  href={link.href}
                  className="flex items-center gap-3 p-4"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base mb-0.5">{link.title}</h3>
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </Link>
              </Card>
            )
          })}
        </div>

        {/* Footer Links */}
        <div className="border-t pt-6">
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              الشروط والأحكام
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              <Shield className="w-3.5 h-3.5" />
              سياسة الخصوصية
            </Link>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">© 2025 خدمة الفحص الفني الدوري</p>
        </div>
      </div>
    </div>
  )
}
