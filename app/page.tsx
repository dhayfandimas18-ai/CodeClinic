import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Code2,
  Users,
  Bot,
  BookOpen,
  Video,
  Star,
  Check,
  ArrowRight,
  Menu,
  Github,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react"

export default function CodeClinicLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CodeClinic</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#fitur" className="text-gray-700 hover:text-blue-600 transition-colors">
                Fitur
              </a>
              <a href="#sertifikasi" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sertifikasi
              </a>
              <a href="#komunitas" className="text-gray-700 hover:text-blue-600 transition-colors">
                Komunitas
              </a>
              <a href="#login" className="text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Coba Gratis
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Platform #1 untuk Mahasiswa Informatika
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Klinik Debugging Pertama untuk{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Mahasiswa Informatika
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tempat kamu curhat error dan sembuh bareng komunitas dan AI. Dari peer-to-peer debugging sampai
              sertifikasi mini, semua ada di sini!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-3"
              >
                Mulai Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-blue-200 hover:bg-blue-50 bg-transparent"
              >
                Lihat Demo
              </Button>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20Jul%202025%2C%2020.32.23-osbq4gKtG1AlQoImQcuGLm5gK4ejbO.png"
                alt="Students coding with AI assistance"
                className="mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan CodeClinic</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk journey coding kamu, dari debugging sampai sertifikasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Peer-to-peer Debugging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Chat & bantu sesama pengguna. Sharing knowledge sambil solve problem bareng komunitas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">AI Code Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Diagnosis error & saran otomatis dari AI. Seperti punya mentor pribadi 24/7.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Latihan Proyek + Sertifikat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Bangun portofolio coding nyata dengan project-based learning dan dapatkan sertifikat.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Klinik Virtual</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Jadwal konsultasi 1-on-1 dengan mentor berpengalaman untuk guidance yang lebih personal.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-purple-100 text-purple-700">Blue Ocean Strategy</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Kenapa CodeClinic Berbeda?</h2>
              <p className="text-xl text-gray-600 mb-8">
                "Dari mahasiswa, untuk mahasiswa." Kami paham struggle kamu karena kami juga pernah di posisi yang sama.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Komunitas Sesama Mahasiswa</h3>
                    <p className="text-gray-600">Bukan cuma platform, tapi komunitas yang saling support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">AI + Human Touch</h3>
                    <p className="text-gray-600">Kombinasi AI assistance dengan mentoring dari senior</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Project-Based Learning</h3>
                    <p className="text-gray-600">Belajar sambil bikin portfolio yang bisa dipake buat apply kerja</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20Jul%202025%2C%2020.39.27-aR8S9WTlgMrnX8o9zS84hdp5DzSyBz.png"
                alt="Students collaborating"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kata Mereka Tentang CodeClinic</h2>
            <p className="text-xl text-gray-600">Ribuan mahasiswa sudah merasakan manfaatnya</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img src="/placeholder.svg?height=50&width=50" alt="Sarah" className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">Sarah Putri</h3>
                    <p className="text-sm text-gray-600">Mahasiswa Teknik Informatika</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Akhirnya ada tempat buat keluh kesah error coding! AI assistantnya helpful banget, dan komunitas di
                  sini supportive."
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img src="/placeholder.svg?height=50&width=50" alt="Rizki" className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">Rizki Pratama</h3>
                    <p className="text-sm text-gray-600">Bootcamp Graduate</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Dari stuck di algoritma sampai dapet kerja, CodeClinic ngebantu banget. Sertifikatnya juga diakuin
                  sama recruiter!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img src="/placeholder.svg?height=50&width=50" alt="Maya" className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">Maya Sari</h3>
                    <p className="text-sm text-gray-600">Fresh Graduate</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Portfolio yang dibikin di CodeClinic jadi selling point pas interview. Mentornya juga kasih feedback
                  yang konstruktif."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="sertifikasi" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket yang Cocok untuk Kamu</h2>
            <p className="text-xl text-gray-600">Mulai gratis, upgrade kapan aja sesuai kebutuhan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-200 relative">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Perfect untuk mulai belajar</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  Rp 0<span className="text-lg font-normal text-gray-600">/bulan</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Akses komunitas debugging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>AI Assistant basic (10 query/hari)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>3 latihan proyek gratis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Forum diskusi</span>
                </div>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Mulai Gratis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-purple-200 relative bg-gradient-to-br from-purple-50 to-blue-50">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription>Untuk yang serius mau jadi developer</CardDescription>
                <div className="text-3xl font-bold text-gray-900">
                  Rp 99K<span className="text-lg font-normal text-gray-600">/bulan</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Semua fitur Free</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>AI Assistant unlimited</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Konsultasi 1-on-1 dengan mentor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Unlimited project & sertifikasi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Job referral program</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Upgrade ke Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bergabunglah dengan Ratusan Mahasiswa Lainnya!</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Jangan biarkan error code menghalangi impian kamu jadi developer. Mulai journey coding kamu bersama
            CodeClinic sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Daftar Sekarang - Gratis!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 bg-transparent"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CodeClinic</span>
              </div>
              <p className="text-gray-400 mb-4">
                Platform edukatif dan komunitas untuk mahasiswa informatika dan programmer pemula.
              </p>
              <div className="flex space-x-4">
                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tim
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kontak
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Dapatkan tips coding mingguan</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Email kamu"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CodeClinic. All rights reserved. Made with ❤️ for Indonesian developers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
