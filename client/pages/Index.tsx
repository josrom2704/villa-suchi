import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import InteractiveMap from "@/components/InteractiveMap";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Heart,
  Truck,
  ShoppingCart,
  Timer,
  Users,
  BookOpen,
  Smile,
  Shield,
  MessageCircle,
  Sparkles,
  Star,
  Trophy,
  Crown,
  Gem,
  Calendar
} from "lucide-react";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<div className="min-h-screen bg-cream-50 relative">

  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'glass-effect backdrop-blur-lg bg-white/80 shadow-lg' 
      : 'bg-transparent'
  }`}>
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo Villa Suchimex"
            className="w-10 h-10 object-contain"
          />
          <h3 className={`text-2xl font-serif font-bold transition-colors duration-300 ${
            isScrolled ? 'text-terracotta-700' : 'text-white'
          }`}>
            Villa Suchimex
          </h3>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#inicio" className={`font-medium transition-colors duration-300 hover:text-terracotta-500 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Inicio</a>
          <a href="#paquetes" className={`font-medium transition-colors duration-300 hover:text-terracotta-500 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Menú</a>
          <a href="#contacto" className={`font-medium transition-colors duration-300 hover:text-terracotta-500 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>Contacto</a>
          <Button className="bg-terracotta-500 hover:bg-terracotta-600 text-white">
            Reservar
          </Button>
        </div>
        </div>
    </div>
  </nav>
 
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg animate-pulse-soft"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

     
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
                             url("https://cdn.builder.io/api/v1/image/assets%2F9225085c38c54128aa2dad2ceed8d1be%2F4e954ee038404e65965ce8e7a4c3dad6?format=webp&width=1200")`
          }}
        />
        
       
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-8 h-8 text-gold-300 opacity-60" />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
          <Crown className="w-10 h-10 text-gold-400 opacity-50" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Gem className="w-6 h-6 text-emerald-300 opacity-70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto animate-fade-in">
          <div className="mb-6">
            <Badge className="bg-gold-500/20 text-gold-100 border-gold-300/30 mb-4 px-4 py-2 text-sm font-medium">
              ✨ Experiencia Mexicana Premium
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 text-balance leading-tight">
            <span className="block">Bienvenidos a</span>
            <span className="gradient-text text-transparent bg-gradient-to-r from-gold-200 via-cream-100 to-emerald-200 bg-clip-text">
              Villa Suchimex
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 text-cream-100 text-balance max-w-4xl mx-auto leading-relaxed">
            Un paraíso mexicano en el corazón de Suchitoto, donde la tradición se encuentra con el lujo moderno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-10 py-4 text-xl rounded-xl luxury-shadow premium-hover">
              <BookOpen className="w-6 h-6 mr-3" />
              Explorar Menú
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-cream-100/80 text-cream-100 hover:bg-cream-100 hover:text-terracotta-700 px-10 py-4 text-xl rounded-xl glass-effect premium-hover">
              <Calendar className="w-6 h-6 mr-3" />
              Reservar 
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cream-200 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cream-200 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-cream-50 to-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta-50/20 to-emerald-50/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-terracotta-100 text-terracotta-700 px-6 py-2 text-lg font-medium mb-6">
              <Trophy className="w-5 h-5 mr-2" />
              Nuestra Excelencia
            </Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">
              Cifras que Impresionan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de una década creando experiencias inolvidables en el corazón de Suchitoto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200/50 text-center premium-hover group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-200 to-emerald-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-emerald-700" />
                </div>
                <h3 className="text-5xl font-serif font-bold text-emerald-800 mb-3 group-hover:scale-105 transition-transform duration-300">15+</h3>
                <p className="text-lg text-emerald-700 font-medium">Años de tradición</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-terracotta-50 to-terracotta-100 border-terracotta-200/50 text-center premium-hover group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta-500/0 via-terracotta-500/10 to-terracotta-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-terracotta-200 to-terracotta-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-terracotta-700" />
                </div>
                <h3 className="text-5xl font-serif font-bold text-terracotta-800 mb-3 group-hover:scale-105 transition-transform duration-300">100+</h3>
                <p className="text-lg text-terracotta-700 font-medium">Recetas familiares</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cream-100 to-cream-200 border-cream-300/50 text-center premium-hover group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cream-500/0 via-cream-500/10 to-cream-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-cream-300 to-cream-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-cream-800" />
                </div>
                <h3 className="text-5xl font-serif font-bold text-cream-800 mb-3 group-hover:scale-105 transition-transform duration-300">500+</h3>
                <p className="text-lg text-cream-700 font-medium">Huéspedes felices</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gold-50 to-gold-100 border-gold-200/50 text-center premium-hover group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="pt-8 pb-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-gold-200 to-gold-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-gold-700" />
                </div>
                <h3 className="text-5xl font-serif font-bold text-gold-800 mb-3 group-hover:scale-105 transition-transform duration-300">24/7</h3>
                <p className="text-lg text-gold-700 font-medium">Hospitalidad </p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  
      <section id="paquetes" className="py-24 bg-gradient-to-b from-cream-100 to-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-100 text-emerald-700 px-6 py-2 text-lg font-medium mb-6">
              <Gem className="w-5 h-5 mr-2" />
              Experiencias Exclusivas
            </Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">
              Paquetes Todo Incluido
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada experiencia está cuidadosamente diseñada para superar tus expectativas
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <Card className="premium-hover overflow-hidden relative group bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta-500/5 to-terracotta-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             
              <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: 'url("https://cdn.builder.io/api/v1/image/assets%2F9225085c38c54128aa2dad2ceed8d1be%2F00f54e2c18a544128c80c4ccf94783d2?format=webp&width=800")'}}>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-terracotta-500 text-white text-lg px-3 py-1 font-bold">$150</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-terracotta-600" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif text-terracotta-700 mb-2">Escapada Romántica</CardTitle>
                <CardDescription className="text-base text-emerald-600 font-medium">2 días / 1 noche</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cena íntima a la luz de las velas, spa de parejas y habitación con vista panorámica al lago.
                </p>
                <Button className="w-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white rounded-xl py-3 text-lg font-medium">
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-hover overflow-hidden relative group bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            
              <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: 'url("https://cdn.builder.io/api/v1/image/assets%2F9225085c38c54128aa2dad2ceed8d1be%2F9045a8417dc14a7faacab55eee2c5400?format=webp&width=800")'}}>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-emerald-500 text-white text-lg px-3 py-1 font-bold">$280</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif text-emerald-700 mb-2">Aventura Familiar</CardTitle>
                <CardDescription className="text-base text-terracotta-600 font-medium">3 días / 2 noches</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Actividades para toda la familia, piscina premium, excursiones guiadas y buffet gourmet.
                </p>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl py-3 text-lg font-medium">
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-hover overflow-hidden relative group bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            
              <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: 'url("https://cdn.builder.io/api/v1/image/assets%2F9225085c38c54128aa2dad2ceed8d1be%2F2bb70b77690b4a978d6f7a5061d0d351?format=webp&width=800")'}}>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gold-500 text-white text-lg px-3 py-1 font-bold">$200</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-gold-600" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif text-gold-700 mb-2">Retiro Gastronómico</CardTitle>
                <CardDescription className="text-base text-emerald-600 font-medium">2 días / 1 noche</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Clases de cocina con chef, degustación de vinos y menú degustación exclusivo.
                </p>
                <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white rounded-xl py-3 text-lg font-medium">
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-hover overflow-hidden relative group bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-cream-500/5 to-cream-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              
              <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: 'url("https://cdn.builder.io/api/v1/image/assets%2F9225085c38c54128aa2dad2ceed8d1be%2F955182024ae740bea87d96f9f9a9d9be?format=webp&width=800")'}}>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-terracotta-600 to-emerald-600 text-white text-lg px-3 py-1 font-bold">$450</Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Crown className="w-8 h-8 text-cream-700" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif text-cream-700 mb-2">Estancia VIP</CardTitle>
                <CardDescription className="text-base text-terracotta-600 font-medium">5 días / 4 noches</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Experiencia completa de lujo: spa, yoga, comidas gourmet y excursiones culturales privadas.
                </p>
                <Button className="w-full bg-gradient-to-r from-terracotta-600 to-emerald-600 hover:shadow-lg text-white rounded-xl py-3 text-lg font-medium">
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-sage-100 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <Badge className="bg-emerald-500 text-white px-6 py-2 text-lg font-medium mb-6">
              <Sparkles className="w-5 h-5 mr-2" />
              Próximamente
            </Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-emerald-700 mb-6">
              Pedidos & Entrega 
            </h2>
            <p className="text-xl text-emerald-600 max-w-3xl mx-auto">
              Llevaremos la experiencia Villa Suchimex directamente a tu hogar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                <Truck className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-emerald-700">Entrega Rápida</h3>
              <p className="text-emerald-600 text-lg">Menos de 45 minutos en todo Suchitoto</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-terracotta-100 to-terracotta-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                <ShoppingCart className="w-12 h-12 text-terracotta-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-terracotta-700">Pedidos Online</h3>
              <p className="text-terracotta-600 text-lg">App móvil fácil y moderna</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 luxury-shadow">
                <Timer className="w-12 h-12 text-gold-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-gold-700">Horarios Flexibles</h3>
              <p className="text-gold-600 text-lg">Disponible hasta las 10 PM</p>
            </div>
          </div>

          <Card className="max-w-lg mx-auto bg-white luxury-shadow premium-hover">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-serif text-emerald-700 mb-2">
                ¡Sé el primero en saberlo!
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Dejanos tu email y te notificaremos cuando esté disponible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="flex-1 rounded-xl border-emerald-200 focus:border-emerald-400 h-12"
                />
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-6 rounded-xl h-12">
                  Notificar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    
      <section id="contacto" className="py-24 bg-gradient-to-b from-cream-100 to-cream-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="bg-terracotta-100 text-terracotta-700 px-6 py-2 text-lg font-medium mb-6">
              <MapPin className="w-5 h-5 mr-2" />
              Visítanos
            </Badge>
            <h2 className="text-5xl md:text-6xl font-serif font-bold gradient-text mb-6">
              Ubicación & Contacto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En el corazón histórico de Suchitoto, donde cada momento cuenta
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white premium-hover luxury-shadow group">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-terracotta-100 to-terracotta-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-terracotta-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 mb-1">Teléfono</h3>
                        <p className="text-gray-600 text-lg">+503 2335-1234</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white premium-hover luxury-shadow group">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600 text-lg">info@villasuchimex.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white premium-hover luxury-shadow group">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-gold-100 to-gold-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-gold-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 mb-1">Dirección</h3>
                        <p className="text-gray-600 text-lg">Centro de Suchitoto, Cuscatlán</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white premium-hover luxury-shadow group">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-cream-200 to-cream-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-7 h-7 text-cream-700" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 mb-1">Horarios</h3>
                        <p className="text-gray-600 text-lg">24/7 Recepción Premium</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

             
              <Card className="bg-white luxury-shadow premium-hover">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-terracotta-700 flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    Síguenos en Redes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="border-emerald-300 hover:bg-emerald-50 rounded-xl px-6 py-3">
                      <Instagram className="w-5 h-5 mr-3 text-emerald-600" />
                      <span className="text-lg">@villasuchimex</span>
                    </Button>
                    <Button variant="outline" className="border-terracotta-300 hover:bg-terracotta-50 rounded-xl px-6 py-3">
                      <Facebook className="w-5 h-5 mr-3 text-terracotta-600" />
                      <span className="text-lg">Villa Suchimex</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          
            <InteractiveMap 
              location="Suchitoto, Cuscatlán, El Salvador"
              googleMapsUrl="https://maps.app.goo.gl/uyxDeDh2oJQn5VYR9"
            />
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b85d3e' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
           
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-terracotta-500 to-gold-500 rounded-xl flex items-center justify-center">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-serif font-bold gradient-text">Villa Suchimex</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
                Un refugio de tranquilidad y tradición mexicana en el corazón histórico de Suchitoto. 
                Donde cada huésped vive una experiencia auténtica e inolvidable.
              </p>
            </div>

       
            <div>
              <h4 className="text-xl font-serif font-bold mb-6 text-terracotta-300">Enlaces Rápidos</h4>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#inicio" className="hover:text-terracotta-400 transition-colors duration-300 text-lg">Inicio</a></li>
                <li><a href="#paquetes" className="hover:text-terracotta-400 transition-colors duration-300 text-lg">Paquetes</a></li>
                <li><a href="#" className="hover:text-terracotta-400 transition-colors duration-300 text-lg">Promociones</a></li>
                <li><a href="#contacto" className="hover:text-terracotta-400 transition-colors duration-300 text-lg">Contacto</a></li>
              </ul>
            </div>

       
            <div>
              <h4 className="text-xl font-serif font-bold mb-6 text-emerald-300">Contacto</h4>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center gap-3 text-lg">
                  <Phone className="w-5 h-5 text-terracotta-400" />
                  +503 2335-1234
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  info@villasuchimex.com
                </p>
                <p className="flex items-center gap-3 text-lg">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  Suchitoto, Cuscatlán
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg mb-4 md:mb-0">
              © 2025 Villa Suchimex.
            </p>
            <p className="text-gray-400 text-lg flex items-center gap-2">
              Hecho con <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" /> en El Salvador
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
