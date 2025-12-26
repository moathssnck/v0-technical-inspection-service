import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowRight className="ml-2 h-4 w-4" />
              العودة للرئيسية
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">الشروط والأحكام</h1>
          </div>
          <p className="text-sm text-muted-foreground">آخر تحديث: ديسمبر 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-3">1. مقدمة</h2>
            <p className="text-muted-foreground leading-relaxed">
              مرحباً بكم في خدمة الفحص الفني الدوري. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.
              يرجى قراءتها بعناية قبل استخدام خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. الخدمات المقدمة</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              نقدم خدمات الفحص الفني الدوري للمركبات وفقاً للمعايير والمواصفات المعتمدة. تشمل خدماتنا:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>فحص السلامة العامة للمركبة</li>
              <li>فحص أنظمة الفرامل والإطارات</li>
              <li>فحص الإضاءة والكهرباء</li>
              <li>فحص الانبعاثات البيئية</li>
              <li>إصدار شهادة الفحص الفني</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. حجز المواعيد</h2>
            <p className="text-muted-foreground leading-relaxed">
              يمكن حجز المواعيد عبر الموقع الإلكتروني أو التطبيق. يجب الحضور في الموعد المحدد، وفي حالة التأخير أكثر من
              15 دقيقة، قد يتم إلغاء الموعد وإعادة جدولته.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. الرسوم والدفع</h2>
            <p className="text-muted-foreground leading-relaxed">
              يتم تحديد رسوم الفحص وفقاً لنوع المركبة والخدمات المطلوبة. الدفع يتم نقداً أو إلكترونياً. جميع الرسوم غير
              قابلة للاسترداد بعد إتمام الفحص.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. المسؤولية</h2>
            <p className="text-muted-foreground leading-relaxed">
              نلتزم بتقديم خدمة فحص دقيقة وموثوقة. ومع ذلك، فإن مالك المركبة يتحمل المسؤولية الكاملة عن صيانة مركبته
              والتأكد من سلامتها.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. إعادة الفحص</h2>
            <p className="text-muted-foreground leading-relaxed">
              في حالة عدم اجتياز الفحص، يجب إصلاح الأعطال وإعادة الفحص خلال 30 يوماً. إعادة الفحص قد تخضع لرسوم إضافية.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. تعديل الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إشعار المستخدمين بأي تغييرات جوهرية عبر الموقع
              الإلكتروني.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. الاتصال بنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              لأي استفسارات حول هذه الشروط والأحكام، يرجى التواصل معنا عبر قنوات الاتصال المتاحة على موقعنا الإلكتروني.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t text-center">
          <Link href="/">
            <Button>
              العودة للصفحة الرئيسية
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
