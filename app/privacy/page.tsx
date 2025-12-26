import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Reduced max-width and vertical padding for compact layout */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        {/* Made header more compact */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowRight className="ml-2 h-4 w-4" />
              العودة للرئيسية
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">سياسة الخصوصية</h1>
          </div>
          <p className="text-sm text-muted-foreground">آخر تحديث: ديسمبر 2025</p>
        </div>

        {/* Content */}
        {/* Reduced spacing and font sizes for minimal design */}
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-4">1. المقدمة</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن في خدمة الفحص الفني الدوري نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيفية جمع
              واستخدام وحماية معلوماتك.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. المعلومات التي نجمعها</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">نقوم بجمع المعلومات التالية:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>البيانات الشخصية (الاسم، رقم الهوية، رقم الجوال، البريد الإلكتروني)</li>
              <li>بيانات المركبة (رقم اللوحة، نوع المركبة، سنة الصنع)</li>
              <li>نتائج الفحص الفني وتاريخ الفحوصات السابقة</li>
              <li>معلومات الدفع والفواتير</li>
              <li>بيانات الاستخدام والتصفح على الموقع</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. كيفية استخدام المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">نستخدم معلوماتك للأغراض التالية:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>تقديم خدمات الفحص الفني</li>
              <li>إدارة المواعيد والحجوزات</li>
              <li>إصدار الشهادات والفواتير</li>
              <li>التواصل معك بخصوص خدماتنا</li>
              <li>تحسين جودة خدماتنا</li>
              <li>الالتزام بالمتطلبات القانونية والتنظيمية</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. مشاركة المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع الجهات الحكومية المختصة وفقاً
              للمتطلبات القانونية، أو مع مقدمي الخدمات الذين يساعدوننا في تشغيل خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. أمن المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. نستخدم
              تقنيات التشفير والتخزين الآمن لحماية بياناتك.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. حقوقك</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">لديك الحق في:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح المعلومات غير الدقيقة</li>
              <li>طلب حذف معلوماتك (مع مراعاة الالتزامات القانونية)</li>
              <li>الاعتراض على معالجة معلوماتك</li>
              <li>طلب نسخة من بياناتك</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. الاحتفاظ بالبيانات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بمعلوماتك طالما كان ذلك ضرورياً لتقديم خدماتنا والوفاء بالالتزامات القانونية. يتم الاحتفاظ بسجلات
              الفحص وفقاً للمتطلبات التنظيمية.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم وتحليل استخدام الموقع. يمكنك التحكم في إعدادات ملفات
              تعريف الارتباط من خلال متصفحك.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. التغييرات على السياسة</h2>
            <p className="text-muted-foreground leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث".
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">10. الاتصال بنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية أو معالجة بياناتك، يرجى التواصل معنا عبر قنوات
              الاتصال المتاحة على موقعنا.
            </p>
          </section>
        </div>

        {/* Footer */}
        {/* Made footer more compact */}
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
