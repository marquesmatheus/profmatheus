window.dadosMobile = {
  title: 'Experiencia Aplicada em Analise e Desenvolvimento Movel',
  materiaisUrl: '/profmatheus/materiais/mobile.html',
  aulasPorSemana: '2',
  totalAulas: 40,
  stack: 'Flutter & Dart',
  semanas: [
    { titulo: 'Semana 1 — Introducao ao Desenvolvimento Movel', aulas: [
      { icon: '📱', t: 'Plataformas moveis e ecossistema',
        c: 'Mercado mobile: 6,5 bilhoes de smartphones. Plataformas: Android (Kotlin/Java, Google Play) e iOS (Swift/Obj-C, App Store). Desenvolvimento nativo vs cross-platform. Flutter (Dart, Google): compilado nativamente, motor próprio (Skia), 60fps. React Native (JS, Meta): ponte para componentes nativos. Escolhemos Flutter por performance e uma base de código multiplataforma.',
        a: 'Crie uma tabela comparativa entre Android nativo, iOS nativo, Flutter e React Native considerando: linguagem, performance, comunidade, custo.',
        p: 'Pesquise a historia do Flutter — quando foi lancado, versões principais, comparacao de popularidade com React Native (Google Trends).' },
      { icon: '💙', t: 'Introducao ao Flutter e Dart',
        c: 'Flutter: framework UI do Google para multiplataforma. Dart: linguagem moderna, tipada, com null safety, compilacao AOT (produção) e JIT (desenvolvimento com Hot Reload). Primeiro projeto: flutter create. Estrutura: lib/main.dart (entry point), pubspec.yaml (dependencias), android/ e ios/ (plataformas).',
        a: 'Instale Flutter (flutter.dev), rode flutter doctor, crie o primeiro projeto (flutter create myapp) e execute com flutter run.',
        p: 'Pesquise sobre o motor de renderização Skia (e agora Impeller no iOS) — como o Flutter renderiza widgets sem usar componentes nativos.' }
    ]},
    { titulo: 'Semana 2 — Dart Fundamentals', aulas: [
      { icon: '🎯', t: 'Sintaxe básica do Dart',
        c: 'Dart: sintaxe similar a Java/JavaScript. Variaveis: var (inferido), final (imutável), const (constante de compilacao). Tipos: int, double, String, bool, List, Map, Set. Null safety: String? nome (pode ser null), operador ! (force unwrap), ?? (default). Funcoes: parametros nomeados ({required String nome}), arrow function (=>).',
        a: 'Escreva um programa Dart que leia 3 notas, calcule a media e exiba "Aprovado" (>=7) ou "Reprovado". Use null safety e arrow function.',
        p: 'Pesquise a diferença entre final e const em Dart — como o compilador trata cada uma e exemplos de uso.' },
      { icon: '🎯', t: 'Orientacao a Objetos em Dart',
        c: 'Dart e puramente orientado a objetos. Classes: class Pessoa { String nome; int idade; }. Construtores: Pessoa(this.nome, this.idade); (syntactic sugar). Heranca: extends, super. Mixins: with NomeMixin (reuso sem herança). Interfaces: classes abstratas com implements. Generics: List<int>, Map<String, dynamic>.',
        a: 'Crie uma classe abstrata Animal com método falar(), e classes Cachorro e Gato que a implementam. Use polimorfismo para chamar falar().',
        p: 'Pesquise sobre mixins em Dart — como eles diferem de herança multipla e exemplos de uso com WidgetsBindingObserver.' }
    ]},
    { titulo: 'Semana 3 — Widgets Fundamentais', aulas: [
      { icon: '🧱', t: 'Widgets básicos',
        c: 'Tudo no Flutter e widget. Widgets basics: Text (texto estilizado), Container (caixa com decoracao, padding, margem), Row (horizontal), Column (vertical), Stack (empilhamento), Image (rede ou assets), Icon (icones Material Design). MaterialApp: tema, rotas, localizacao. Scaffold: estrutura básica de tela (AppBar, body, floatingActionButton).',
        a: 'Crie uma tela com: AppBar com titulo, body com Column contendo um texto centralizado, uma imagem da internet (Image.network) e um icone.',
        p: 'Pesquise a filosofia de widgets do Flutter — por que "tudo e widget" e como isso afeta a composicao da interface.' },
      { icon: '📐', t: 'Layout e responsividade',
        c: 'Flex: Expanded (ocupa espaco disponivel) e Flexible (ocupa espaco proporcional). MediaQuery: MediaQuery.of(context).size.width para adaptar layout. LayoutBuilder: builder que recebe constraints (largura/altura máxima). SafeArea: evita areas seguras (entalhes, status bar). OrientationBuilder: adapta ao girar o dispositivo.',
        a: 'Crie um layout responsivo que: em portrait mostra Column com 3 cards, em landscape Row com os mesmos 3 cards. Use OrientationBuilder.',
        p: 'Pesquise o LayoutBuilder no Flutter — como ele difere de MediaQuery e quando usar cada um para criar layouts responsivos.' }
    ]},
    { titulo: 'Semana 4 — Widgets de Interacao', aulas: [
      { icon: '🖱️', t: 'Botoes e entrada de dados',
        c: 'Botoes: ElevatedButton (preenchido), OutlinedButton (borda), TextButton (texto). TextField: entrada de texto, controller (TextEditingController), decoration (label, hint, border, icon). Form: validacao com GlobalKey<FormState>, validator, autovalidateMode. onChanged, onSubmitted. FocusNode para foco automático e teclado.',
        a: 'Crie um formulario de cadastro com: nome, email, senha e confirmacao de senha. Valide: campos obrigatorios, formato de email, senhas coincidentes.',
        p: 'Pesquise sobre FocusScope no Flutter — como controlar o foco entre campos, esconder o teclado e gerenciar next focus.' },
      { icon: '📋', t: 'Listas e scroll',
        c: 'ListView: builder (eficiente, cria apenas itens visíveis), separated (com divisor), custom (controle total). GridView: count (itens por linha), extent (tamanho máximo). ScrollController: controlar scroll, detectar scroll infinito (posicao == maxScrollExtent). RefreshIndicator: pull-to-refresh. Scroll infinito com paginacao.',
        a: 'Crie uma lista infinita: ListView.builder que carrega 20 itens por vez e ao chegar no final carrega mais 20. Use ScrollController.',
        p: 'Pesquise o SliverList e CustomScrollView — como criar layouts complexos com scroll combinando listas, grids e app bar colapsavel.' }
    ]},
    { titulo: 'Semana 5 — Navegacao', aulas: [
      { icon: '🧭', t: 'Navegacao básica',
        c: 'Navigator: pilha de telas (push para nova tela, pop para voltar). Navigator.push: navega para nova rota com MaterialPageRoute. Navigator.pop: volta para tela anterior. Passagem de dados: arguments no push, ModalRoute.of(context)!.settings.arguments no destino. Rotas nomeadas: Navigator.pushNamed(context, \'/detalhe\', arguments: obj).',
        a: 'Crie um app com 2 telas: Home (lista de itens) e Detalhe (mostra detalhes). Ao clicar em um item, navegue para detalhe passando os dados do item.',
        p: 'Pesquise o Navigator 2.0 no Flutter (Router, RouteInformationParser, RouterDelegate) e casos de uso para navegação declarativa.' },
      { icon: '🧭', t: 'Navegacao avançada',
        c: 'Rotas nomeadas: routes no MaterialApp, onGenerateRoute para rotas com parametros. PushReplacement: substitui tela atual (login -> home). PushAndRemoveUntil: remove telas ate condicao (logout). PopUntil: volta ate determinada tela. Resultados: Navigator.push().then((result) => ...). Animações customizadas com PageRouteBuilder.',
        a: 'Implemente navegação com: tela de login que faz pushReplacement para home, e home com bottomNavigationBar com 3 tabs (Feed, Busca, Perfil).',
        p: 'Pesquise o GoRouter (pacote oficial do Flutter) — roteamento declarativo com redirecionamento, nested navigation e deep linking.' }
    ]},
    { titulo: 'Semana 6 — Gerenciamento de Estado', aulas: [
      { icon: '🔄', t: 'StatefulWidget e setState',
        c: 'StatefulWidget: widget com estado mutavel. setState(): marca para reconstruir. Contador classico: StatefulWidget + setState. Limitacao: prop drilling (passar estado por varios níveis) e estados compartilhados complexos. Inefficiente para estado global. Adequado para estado local simples.',
        a: 'Crie um cronometro com StatefulWidget: botoes iniciar, pausar e resetar. Use Timer.periodic para atualizar a cada segundo.',
        p: 'Pesquise o ciclo de vida de um StatefulWidget (createState, initState, didChangeDependencies, build, setState, dispose, didUpdateWidget).' },
      { icon: '🔄', t: 'Provider',
        c: 'Provider: gerenciamento de estado recomendado pelo Flutter. ChangeNotifier: classe com notifyListeners(). ChangeNotifierProvider: fornece instância na arvore. Consumer: escuta mudancas e reconstroi apenas a parte necessária. MultiProvider: varios providers. context.read<T>() (acao) vs context.watch<T>() (escuta).',
        a: 'Migre o contador para usar Provider: ChangeNotifier com count + increment, ChangeNotifierProvider no MaterialApp, Consumer no texto.',
        p: 'Pesquise o pacote provider — como ele usa InheritedWidget internamente e por que e preferivel a passar callbacks por props.' }
    ]},
    { titulo: 'Semana 7 — Estado Avancado', aulas: [
      { icon: '🗄️', t: 'Riverpod',
        c: 'Riverpod: evolução do Provider, sem dependência de BuildContext. Providers: Provider (valor síncrono), FutureProvider (async), StreamProvider. Modificadores: .autoDispose (descarta ao sair), .family (parametrizado). ref.watch (escutar), ref.read (ler sem escutar). StatelessWidget usaConsumerRef ou HookWidget.',
        a: 'Refatore o contador de Provider para Riverpod. Crie um provider final counterProvider = StateProvider<int>((ref) => 0).',
        p: 'Pesquise as diferenças entre Provider e Riverpod — compilacao segura, independencia de contexto, autodispose, overrides para teste.' },
      { icon: '🗄️', t: 'Bloc/Cubit',
        c: 'BLoC (Business Logic Component): padrao com eventos e estados. Cubit: simplificacao do BLoC (funções em vez de eventos). flutter_bloc: pacote oficial. Cubit: class CounterCubit extends Cubit<int>. BlocProvider: fornece cubit. BlocBuilder: escuta estados. BlocListener: acoes em resposta a estados sem reconstruir.',
        a: 'Implemente o contador com Cubit: CounterCubit com funções increment() e decrement(), BlocProvider no MaterialApp, BlocBuilder no texto.',
        p: 'Pesquise o padrao BLoC — como ele difere do MVC/MVVM e por que e popular em projetos Flutter empresariais.' }
    ]},
    { titulo: 'Semana 8 — Prova 1 e Projeto', aulas: [
      { icon: '🛠️', t: 'Projeto: to-do app',
        c: 'Projeto prático: to-do app com Flutter. Requisitos: adicionar tarefa (dialog), marcar como concluida (CheckboxListTile), remover (Dismissible), persistência local (SharedPreferences ou sqflite). Tema Material Design customizado (cores, fontes). Empty state: "Nenhuma tarefa ainda". Snackbar de feedback.',
        a: 'Implemente o to-do app completo com Provider para estado, Dismissible para remover com confirmacao, e SharedPreferences para persistência.',
        p: 'Pesquise o padrao Repository no Flutter — como separar fontes de dados (API, banco local) com camadas de abstracao.' },
      { icon: '📝', t: 'Prova 1',
        c: 'Avaliacao individual sobre: Dart (sintaxe, OO, null safety), widgets (basics, layout, interação, listas), navegação (push/pop, rotas nomeadas), gerenciamento de estado (setState, Provider). Questoes teoricas e práticas. Duracao: 50 minutos.',
        a: 'Resolva a prova: questões de código Dart e implementação de widgets Flutter.',
        p: 'Apos a prova, revise os erros e aprofunde os tópicos com base no feedback do professor.' }
    ]},
    { titulo: 'Semana 9 — Consumo de APIs', aulas: [
      { icon: '📡', t: 'HTTP e REST',
        c: 'HTTP no Flutter: pacote http ou dio. http.get(Uri.parse(url)), resposta em JSON (jsonDecode). Model: classe fromJson/toJson. Dio: mais completo (interceptors, timeout, cancelamento, upload progress). Parsing manual ou com json_serializable (geração de código). Tratamento de erros try/catch com status codes.',
        a: 'Crie um app que busca usuários de https://jsonplaceholder.typicode.com/users com o pacote http, converte para modelo User e exibe em ListView.',
        p: 'Pesquise o pacote json_serializable + build_runner — como gerar código de serializacao JSON automaticamente.' },
      { icon: '📡', t: 'Tratamento de erros e loading',
        c: 'Estados de tela: loading, sucesso, erro, vazio. FutureBuilder: builder com AsyncSnapshot (connectionState, data, error). Pattern: enum ViewState { idle, loading, success, error }. Tratamento de erros: mensagens amigaveis, botao de retry. Shimmer effect: pacote shimmer para loading animado.',
        a: 'Implemente FutureBuilder para buscar dados, exibindo: CircularProgressIndicator (loading), ListView (sucesso), mensagem de erro com botao retry.',
        p: 'Pesquise o padrao Either (dartz package) para tratamento functional de erros em Dart — Left para erro, Right para sucesso.' }
    ]},
    { titulo: 'Semana 10 — Persistencia Local', aulas: [
      { icon: '💾', t: 'SharedPreferences',
        c: 'SharedPreferences: armazena pares chave-valor (dados simples: config, token, preferencias). Sincrono na prática mas assíncrono na API. Ex: prefs.setString(\'nome\', valor), prefs.getInt(\'contador\'). Limitacao: nao para dados estruturados ou grandes volumes. Bom para configurações do usuário (tema escuro, primeira vez).',
        a: 'Adicione tema escuro ao to-do app: salve a preferencia no SharedPreferences, carregue ao iniciar e alterne com Switch no AppBar.',
        p: 'Pesquise o pacote shared_preferences — como ele implementa persistência em cada plataforma (NSUserDefaults iOS, SharedPreferences Android).' },
      { icon: '🗃️', t: 'SQLite com sqflite',
        c: 'sqflite: banco SQLite local. openDatabase: criar/abrir banco. onCreate: criar tabelas. CRUD: db.insert, db.query, db.update, db.delete. rawQuery para SQL customizado. Model: toMap/fromMap. Path provider: caminho do banco no dispositivo (getDatabasesPath()). Migrations: version + onUpgrade.',
        a: 'Migre o to-do app de SharedPreferences para sqflite: crie tabela tarefas (id, titulo, concluida, data), implemente CRUD completo.',
        p: 'Pesquise o pacote floor (ORM para SQLite no Flutter) — como ele gera código automaticamente a partir de entidades e DAOs.' }
    ]},
    { titulo: 'Semana 11 — Firebase', aulas: [
      { icon: '🔥', t: 'Firebase Authentication',
        c: 'Firebase Auth: autenticação por email/senha, Google, Apple, anonimo. Configuracao: firebase_core + firebase_auth. Email: createUserWithEmailAndPassword, signInWithEmailAndPassword. Google: GoogleSignIn. Auth state: authStateChanges() stream. Usuario: User? currentUser, uid, email, displayName.',
        a: 'Configure Firebase no projeto, implemente tela de login com email/senha e tela de registro. Exiba o email do usuário logado no AppBar.',
        p: 'Pesquise Firebase Auth com Google Sign-In — como configurar OAuth 2.0, SHA fingerprints no Android e GoogleService-Info.plist no iOS.' },
      { icon: '🔥', t: 'Cloud Firestore',
        c: 'Firestore: banco NoSQL em tempo real, documentos e colecoes. Estrutura: colecao > documento > campos. CRUD: add (auto ID), set (ID definido), update, delete. Realtime: snapshots() stream (atualização em tempo real). Regras de segurança: permit read/write if request.auth != null. Indices compostos para consultas complexas.',
        a: 'Integre o to-do app com Firestore: tarefas salvas no Firestore, sincronização em tempo real com snapshots(), autenticação por usuário.',
        p: 'Pesquise a diferença entre Cloud Firestore e Realtime Database — casos de uso, escalabilidade, modelo de dados e precos.' }
    ]},
    { titulo: 'Semana 12 — Recursos do Dispositivo', aulas: [
      { icon: '📷', t: 'Camera e galeria',
        c: 'image_picker: selecionar foto da galeria ou camera. ImagePicker().pickImage(source: ImageSource.camera). camera: controle direto da camera (preview, tirar foto). permission_handler: gerenciar permissoes (camera, galeria, localizacao). Exibir imagem com Image.file() ou Image.network(). Upload com multipart request (http.MultipartRequest).',
        a: 'Crie um app que tira foto com a camera e exibe na tela. Adicione botao para salvar na galeria e outro para compartilhar.',
        p: 'Pesquise o pacote permission_handler — como declarar permissoes no AndroidManifest.xml e Info.plist para camera e armazenamento.' },
      { icon: '🗺️', t: 'Mapas e localizacao',
        c: 'google_maps_flutter: widget GoogleMap, marcadores (Marker), polilinhas (Polyline), controles de camera (animateCamera). geolocator: obter localizacao atual (getCurrentPosition), stream de posicao (positionStream), calculo de distancia. geocoding: converter endereço em coordenadas e vice-versa. Exibicao de mapa com marcador na posicao do usuário.',
        a: 'Crie um app que mostra a localizacao atual no Google Maps com um marcador. Adicione um botao para centralizar na posicao do usuário.',
        p: 'Pesquise a diferença entre google_maps_flutter e flutter_map (OpenStreetMap) — custo, personalização e requisitos de API key.' }
    ]},
    { titulo: 'Semana 13 — Prova 2', aulas: [
      { icon: '📖', t: 'Revisao geral',
        c: 'Revisao dos tópicos da P2: consumo de APIs (http/dio, FutureBuilder, models), persistência (SharedPreferences, sqflite), Firebase (Auth, Firestore), recursos nativos (camera, mapas, permissoes), estado avançado (Riverpod, Bloc/Cubit).',
        a: 'Crie um resumo de uma pagina com os conceitos principais de cada tópico: como buscar dados, salvar localmente, autenticar e usar camera.',
        p: 'Identifique os tópicos com mais dificuldade e revise a documentação oficial do Flutter para cada um.' },
      { icon: '📝', t: 'Prova 2',
        c: 'Avaliacao sobre: consumo de APIs (http, JSON, FutureBuilder), persistência (SharedPreferences, sqflite), Firebase (Auth, Firestore), recursos nativos (camera, mapas), estado (Riverpod, Bloc). Duracao: 50 minutos.',
        a: 'Resolva as questões da prova, priorizando as que voce tem mais segurança.',
        p: 'Apos a correção, revise as questões erradas e aprofunde nos tópicos correspondentes para a prova final.' }
    ]},
    { titulo: 'Semana 14 — Projeto Final', aulas: [
      { icon: '🛠️', t: 'Definicao do projeto final',
        c: 'Inicio do projeto final: aplicativo Flutter completo com backend (Firebase ou API própria). Sugestoes: chat app, e-commerce, rede social, fitness tracker, delivery. Definicao: escopo, funcionalidades, telas (wireframe), arquitetura (Clean Architecture ou MVVM), divisao de tarefas (grupos de 2-3).',
        a: 'Defina o tema do projeto, crie wireframes das telas principais no Figma ou papel e envie para aprovacao.',
        p: 'Pesquise Clean Architecture no Flutter — camadas: data, domain, presentation; dependencias invertidas; casos de uso e repositorios.' },
      { icon: '🛠️', t: 'Setup e arquitetura',
        c: 'Setup: flutter create, estrutura de pastas (lib/data, lib/domain, lib/presentation, lib/core), dependencias no pubspec.yaml (provider/riverpod, dio/http, firebase, go_router, etc.). Git: repositorio no GitHub, branch main + dev, commits semanticos. Configuracao de ambiente: flavors (dev/prod) e variáveis de ambiente.',
        a: 'Crie o repositorio GitHub, configure o projeto com a estrutura de pastas, adicione as dependencias principais e faca o primeiro commit.',
        p: 'Pesquise sobre flavors no Flutter — como configurar ambientes de desenvolvimento e produção com diferentes app names e icones.' }
    ]},
    { titulo: 'Semana 15 — Projeto Final (cont.)', aulas: [
      { icon: '🛠️', t: 'Implementacao parte 1',
        c: 'Implementacao das funcionalidades principais: autenticação (login/register com Firebase Auth), tela inicial com dados do Firestore, navegação entre telas (GoRouter). Componentizacao: widgets reutilizaveis (CustomButton, LoadingWidget, ErrorWidget). Estado global com Provider ou Riverpod.',
        a: 'Implemente: autenticação completa (login, registro, logout), tela principal com dados do Firestore e navegação entre telas.',
        p: 'Pesquise o GoRouter no Flutter — como configurar rotas, redirecionamento para login, e navegação com parametros.' },
      { icon: '🛠️', t: 'Implementacao parte 2',
        c: 'Continuacao: implementação dos recursos nativos (camera, mapas, notificacoes push), integração com APIs externas, tratamento de erros e estados de loading. Testes: unitarios (test) e de widget (flutter_test). Depuracao com DevTools (inspector, timeline, memory).',
        a: 'Implemente 2 recursos nativos (camera, mapas ou notificacoes) e escreva testes unitarios para 3 funções principais.',
        p: 'Pesquise notificacoes push no Flutter com Firebase Cloud Messaging (FCM) — configuração, tratamento em foreground/background.' }
    ]},
    { titulo: 'Semana 16 — Projeto Final (cont.)', aulas: [
      { icon: '🔥', t: 'Firebase e backend',
        c: 'Configuracao avançada do Firebase: Firestore Security Rules (permitir apenas dados do próprio usuário), Storage (upload de imagens), Cloud Functions (backend serverless). Firebase Emulator Suite: testar localmente. Regras de segurança: match /users/{userId} { allow read, write: if request.auth.uid == userId; }.',
        a: 'Configure as regras de segurança do Firestore e Storage. Implemente upload de imagem de perfil com Firebase Storage.',
        p: 'Pesquise Firebase Emulator Suite — como emular Auth, Firestore e Storage localmente durante o desenvolvimento.' },
      { icon: '🧪', t: 'Testes e ajustes',
        c: 'Testes de integração: flutter_driver ou integration_test. Testes de widget: flutter_test com pumpWidget, find, expect. Testes unitarios: test para models, controllers, repositories. Cobertura: flutter test --coverage (lcov). Ajustes finais de UI: responsividade, tema, animacoes.',
        a: 'Escreva testes de widget para 2 telas principais e testes unitarios para 2 repositorios. Execute flutter test e verifique a cobertura.',
        p: 'Pesquise o pacote mockito ou mocktail para Dart — como criar mocks de dependencias em testes unitarios.' }
    ]},
    { titulo: 'Semana 17 — Publicacao', aulas: [
      { icon: '📱', t: 'Preparacao para publicação',
        c: 'Preparacao: icone do app (Android: mipmap, iOS: Assets.xcassets), splash screen (flutter_native_splash), nome do app (AndroidManifest, Info.plist), versão e build number (pubspec.yaml). Assinatura: keystore para Android (keytool), signing config no build.gradle. App signing: Google Play App Signing.',
        a: 'Gere o icone do app em varios tamanhos, configure o splash screen, crie o keystore e configure a assinatura do APK.',
        p: 'Pesquise o flutter_native_splash — como gerar splash screen nativa que aparece antes do Flutter iniciar.' },
      { icon: '📱', t: 'Google Play e App Store',
        c: 'Publicacao: Google Play Console (conta $25 única), preparar APK/AAB (flutter build appbundle), store listing (descrição, screenshots, categorias), teste interno/aberto, produção. Apple App Store (conta $99/ano), TestFlight (teste beta), App Review (diretrizes). Checklist: politica de privacidade, conteúdo adequado.',
        a: 'Gere o AAB (flutter build appbundle), crie a ficha no Google Play Console com screenshots e descrição. Nao publique, apenas prepare.',
        p: 'Pesquise as diretrizes de revisão da Apple App Store — motivos comuns de rejeicao e como evita-los.' }
    ]},
    { titulo: 'Semana 18 — Apresentacoes', aulas: [
      { icon: '🎤', t: 'Apresentacao dos projetos',
        c: 'Apresentacao final (10 min cada): introdução, arquitetura (widget tree, providers, rotas), demonstração ao vivo, desafios e soluções, aprendizados. Perguntas. Avaliacao por pares (peer review). Votacao do melhor app da turma.',
        a: 'Prepare demonstração ao vivo: teste o app em dispositivo fisico (melhor que emulador), prepare roteiro da apresentação.',
        p: 'Pesquise boas práticas de demonstracoes de app ao vivo: modo desenvolvedor, nao depender de internet, ter plano B (grabacao).' },
      { icon: '✅', t: 'Entrega final',
        c: 'Entrega final: repositorio GitHub com README completo (descrição, screenshots, instrucoes de build), APK/AAB gerado, relatorio técnico PDF (arquitetura, decisoes, resultados). Prazo final. Encerramento: feedback geral, melhores práticas, caminhos de especializacao em mobile.',
        a: 'Finalize o repositorio com README e gere o APK final. Submeta o link do repositorio e o APK.',
        p: 'Reflita sobre o aprendizado na disciplina: o que voce construiu, o que foi mais desafiador, e como continuar evoluindo em mobile.' }
    ]},
    { titulo: 'Semana 19 — Revisao Geral', aulas: [
      { icon: '📖', t: 'Revisao: fundamentos Flutter',
        c: 'Revisao integrada: Dart (OO, null safety, generics), widgets (Container, Row, Column, Stack, ListView), navegação (Navigator, GoRouter), estado (setState, Provider, Riverpod, Bloc). Mapa mental conectando todos os conceitos. Exercicios de fixacao.',
        a: 'Crie um mapa conceitual conectando Dart, widgets, navegação, estado e persistência no ecossistema Flutter.',
        p: 'Revise os capitulos 1-8 do livro Google Flutter (Alberto Miola) ou a documentação oficial (docs.flutter.dev).' },
      { icon: '📖', t: 'Revisao: Firebase e APIs',
        c: 'Revisao de APIs (http/dio, JSON, FutureBuilder, tratamento de erros), persistência (SharedPreferences, sqflite, floor), Firebase (Auth, Firestore, Storage, Cloud Functions, FCM), recursos nativos (camera, mapas, permissoes, notificacoes). Duvidas finais para a prova final.',
        a: 'Resolva exercícios integrados: implemente um recurso que busca dados de API, salva localmente e exibe em lista com loading e erro.',
        p: 'Revise o codelab oficial Write a Flutter app on the web (flutter.dev) e os codelabs de Firebase + Flutter.' }
    ]},
    { titulo: 'Semana 20 — Prova Final', aulas: [
      { icon: '📝', t: 'Exercicios de preparacao',
        c: 'Ultima revisão antes da prova final. Resolucao de exercícios abrangentes de todo o semestre. Foco em: implementação de widgets com estados, consumo de API, persistência e Firebase. Esclarecimento de duvidas finais.',
        a: 'Resolva uma prova simulada com questões práticas de código Flutter: widget com Provider, fetch de API, sqflite CRUD, Firebase Auth.',
        p: 'Identifique os últimos pontos fracos e revise a documentação ou codelabs relevantes.' },
      { icon: '📝', t: 'Prova Final',
        c: 'Avaliacao final individual de todo o conteúdo do semestre. Questoes práticas de código Flutter/Dart e questões teoricas. Duracao: 100 minutos (2 aulas). Valor: 10 pontos.',
        a: 'Responda com calma, leia todas as questões primeiro, escreva código claro e comentado, revise antes de entregar.',
        p: 'Apos a prova, autoavaliacao: o que voce aprendeu de mais valioso e como aplicar em projetos pessoais ou profissionais.' },
      { icon: '🎓', t: 'Encerramento e feedback',
        c: 'Encerramento: vista de prova com correção comentada, notas finais, feedback dos alunos. Discusao sobre carreiras em desenvolvimento mobile: freelancer, startup, empresa, Google/Apple. Recursos para continuidade: cursos (Flutter Academy, Clean Code), comunidades (Flutterando, Brasileiras), eventos (FlutterCon).',
        a: 'Participe do feedback e compartilhe sua experiência na disciplina. Deixe sugestoes para melhoria.',
        p: 'Crie um plano de estudos pos-disciplina: roadmap.sh/flutter para continuar evoluindo em desenvolvimento mobile.' }
    ]}
  ]
};
