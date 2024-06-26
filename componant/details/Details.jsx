import React from "react";
import "../details/Details.css"

function Details(){
    return(
        <>
         <div className="details bg-[#181950] p-10">
            <h1>Front End</h1>
            <h3 className=" py-3 px-5 bg-white">تراك الويب (Web development) هو عملية إنشاء وتطوير المواقع وتطبيقات الويب. يتضمن تراك الويب العديد من الجوانب والتقنيات التي تعمل معًا لإنشاء تجارب مستخدم متميزة على الإنترنت. إليك بعض المعلومات الأساسية عن تراك الويب:</h3>
            <p className=" px-10 py-5 bg-white">
                    1. لغات البرمجة: يُستخدم في تراك الويب العديد من لغات البرمجة مثل HTML (لبناء الهيكل والعناصر الأساسية لصفحات الويب) وCSS (لتنسيق وتصميم صفحات الويب) وJavaScript (لجعل صفحات الويب تفاعلية وديناميكية). بالإضافة إلى ذلك، هناك لغات البرمجة الخلفية مثل PHP وPython وRuby وغيرها التي تستخدم للتعامل مع البيانات والبرمجة الخلفية للمواقع.

                    2. تصميم الواجهة البصرية: يُركز تراك الويب على تصميم واجهة المستخدم الجذابة والسهلة الاستخدام. يشمل ذلك تحسين تجربة المستخدم وتوفير رؤية مريحة وجذابة للمحتوى على الشاشة.

                    3. تطوير الجزء الخلفي: يشمل هذا الجانب بناء وإدارة الخوادم وقواعد البيانات والتعامل مع المعلومات ومعالجة البيانات. يستخدم مطورو الويب لغات البرمجة الخلفية وإطارات العمل (Frameworks) لبناء تطبيقات الويب المتقدمة وإدارة البيانات بكفاءة.

                    4. استجابة التصميم: يهتم تراك الويب بتطوير مواقع الويب المستجيبة، وهي المواقع التي تتكيف وتتأقلم مع مختلف أحجام الشاشات وأجهزة الوصول المختلفة مثل الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر المكتبية.

                    5. إدارة المحتوى: يتيح تراك الويب استخدام نظم إدارة المحتوى (CMS) مثل WordPress وDrupal وJoomla لبناء مواقع الويب بسهولة. توفر هذه الأنظمة واجهة سهلة الاستخدام لإضافة وتحرير ونشر المحتوى على الموقع.

                    6. أمان الويب: يُعتبر الأمان من جوانب هامة في تراك الويب. يجب على مطوري الويب اتخاذ إجراءات أمان مثل تأمين الاتصالات وحماية البيانات ومنع الاختراقات والهجمات الإلكترونية.

                    تراك الويب هو مجال شيق وديناميكي يتطور باستمرار، ويتطلب مهارات تقنية وإبداعية. يمكن لمطوري الويب العمل كمستقلين أو في الشركات التكنولوجية أو وكالات التصميم أو الشركات الناشئة. تعد التعلم المستمر ومتابعة أحدث التقنيات والاتجاهات في تراك الويب أمرًا حيويًا للنجاح في هذا المجال.
            </p>
            <div className="box flex justify-between items-center">
                <p className="p-3 bg-white">130$ <span>ريال عماني</span></p>
                <p className="applay bg-white">Apllay</p>
            </div>
         </div>
        </>
    )
}

export default Details;