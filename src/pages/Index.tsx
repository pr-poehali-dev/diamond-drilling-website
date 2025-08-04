import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DiamondDrill</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Заказать услугу
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  Профессиональное оборудование
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Алмазное сверление
                  <span className="text-secondary block">любого диаметра</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Высокоточное бурение отверстий с использованием профессионального алмазного инструмента. 
                Работаем с бетоном, кирпичом, железобетоном любой прочности.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-gray-300">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8">
                <img 
                  src="/img/f69e5906-2f3d-44a5-9f5a-1709ff90ea48.jpg" 
                  alt="Алмазное бурение" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Диаметр до 500мм</p>
                    <p className="text-sm text-gray-600">Любой размер отверстия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Профессиональное алмазное бурение для любых задач</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Точное сверление</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Отверстия диаметром от 20 до 500мм с миллиметровой точностью
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-xl">Быстрая работа</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Современное оборудование обеспечивает высокую скорость бурения
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl">Без пыли</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Система водяного охлаждения исключает образование пыли
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-xl">Любые материалы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Работаем с бетоном, кирпичом, железобетоном любой прочности
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Почему выбирают нас
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Star" size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Опыт более 10 лет</h3>
                    <p className="text-gray-600">Выполнили более 5000 проектов различной сложности</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Award" size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Сертифицированные мастера</h3>
                    <p className="text-gray-600">Все специалисты имеют необходимые допуски и сертификаты</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Работаем 24/7</h3>
                    <p className="text-gray-600">Выполняем срочные заказы в любое время суток</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="ShieldCheck" size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Гарантия качества</h3>
                    <p className="text-gray-600">Предоставляем гарантию на все выполненные работы</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Быстрый расчет стоимости</h3>
                <p className="text-gray-600">Заполните форму и получите предварительную смету</p>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Диаметр, мм" />
                  <Input placeholder="Глубина, см" />
                </div>
                <Input placeholder="Материал стены" />
                <Textarea placeholder="Дополнительные требования" />
                <Input placeholder="Ваш телефон" />
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              
              <div className="text-center mt-6 text-sm text-gray-500">
                Расчет займет не более 5 минут
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600 mb-4">Звоните круглосуточно</p>
              <a href="tel:+79991234567" className="text-2xl font-bold text-primary hover:text-primary/80">
                +7 (999) 123-45-67
              </a>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Пишите в любое время</p>
              <a href="mailto:info@diamonddrill.ru" className="text-lg font-semibold text-secondary hover:text-secondary/80">
                info@diamonddrill.ru
              </a>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600 mb-4">Выезжаем по всему городу</p>
              <p className="text-lg font-semibold text-gray-900">
                Москва и область
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-12">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">DiamondDrill</span>
            </div>
            <p className="text-gray-400 mb-4">Профессиональное алмазное бурение</p>
            <p className="text-sm text-gray-500">
              © 2024 DiamondDrill. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}