let workoutData = [
    {
        id: 'wo000',
        title: "컨벤셔널 덤벨 \n스쿼트",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo001',
        title: "덤벨 프런트 \n스쿼트",
        content: "리프터는 덤벨 한 쌍을 가슴 선반 위에 프런트 랙 자세로 올려놓습니다. 이때 상체가 굽지 않도록 주의합니다. 발은 엉덩이 너비로 벌리고 발가락은 앞쪽을 향하게 합니다.\n이제 적절한 자세를 취한 리프터는 뒤로 앉아 무릎을 구부리는데, 무릎이 평행한 깊이나 그보다 낮아지면 멈춥니다.\n적절한 깊이에 도달하면 리프터는 발뒤꿈치를 이용해 힘을 가해 시작 위치로 돌아갑니다.",
        imgPath: '/images/dumbbell_front_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo002',
        title: "덤벨 스모 \n스쿼트",
        content: "스모 스쿼트를 하려면 먼저 일반 스쿼트보다 발 위치를 더 넓게 잡아야 합니다. 즉, 어깨 너비부터 훨씬 넓게 벌리고 발가락이 대각선 바깥쪽을 향하도록 해야 합니다. \n자세의 다른 모든 요소는 동일하게 유지됩니다. 이제 올바른 자세를 취한 리프터는 다리 사이의 공간에서 덤벨을 잡고 몸통을 최대한 똑바로 세우기 위해 몸통을 수축하고 가슴을 내밀 것입니다. \n이 지점에서 리프터는 엉덩이를 뒤로 밀고 무릎을 구부린 채 엉덩이가 무릎 위쪽과 평행을 이루기 직전까지 몸을 낮춥니다. 이제 적절한 깊이에 도달하면 리프터는 발꿈치를 사용하여 반복을 완료하고 시작 위치로 돌아갈 수 있습니다.",
        imgPath: '/images/dumbbell_sumo_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo003',
        title: "덤벨 스플릿 \n스쿼트",
        content: "덤벨 스플릿 스쿼트를 하려면, 리프터는 한쪽 다리를 앞으로 내밀고 다른 쪽 다리를 뒤로 뻗어 안정성을 확보합니다. 체중의 대부분은 앞을 향한 발에 분산되어야 합니다. 균형 감각에 따라 덤벨을 리프터의 옆구리에 잡거나 앞쪽 랙 위치에 잡을 수 있습니다. \n스태거드 스탠스에서 안정을 취한 후, 리프터는 양쪽 무릎을 동시에 구부리고, 앞을 향한 허벅지가 바닥과 평행이 될 때까지 몸을 낮춥니다. \n이때 뒷다리의 무릎은 바닥에 닿지 않아야 합니다. 이 자세에서 리프터는 발꿈치를 이용해 다시 수직 자세로 돌아와서 반복을 완료할 수 있습니다.",
        imgPath: '/images/dumbbell_split_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo004',
        title: "고블릿 스쿼트",
        content: "고블릿 스쿼트를 하려면 리프터는 발을 엉덩이 너비보다 약간 넓게 벌리고, 양손에 덤벨 한쪽 끝을 잡고 가슴 높이에서 들어 올립니다. \n코어를 수축하고 척추는 중립을 유지하며 머리는 정면을 향하게 한 후, 무릎을 굽히면서 엉덩이를 뒤로 밀어냅니다. 덤벨은 가슴 높이에서 계속 잡고, 최대 깊이까지 들어 올릴 때는 팔꿈치가 다리 사이에 있어야 합니다. \n평행 깊이에 도달하면, 리프터는 발꿈치를 이용하여 힘을 주고 시작 위치로 돌아갑니다. 이것으로 반복이 완료됩니다.",
        imgPath: '/images/goblet_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "덤벨 불가리안 \n스플릿 스쿼트",
        content: "불가리안 스플릿 스쿼트를 반복하려면, 리프터는 벤치에서 반대쪽을 바라보고 서서 한 발을 벤치 뒤에 올려놓습니다. 반대쪽 발은 뒷다리가 뒤로 쭉 뻗어질 정도로 충분히 앞으로 내딛어야 합니다. \n덤벨 한 쌍을 잡은 상태에서 코어를 수축하고 척추는 중립 자세를 유지하며 양쪽 무릎을 동시에 굽힙니다. 이 동작은 양쪽 무릎이 90도 굴곡될 때까지 계속해야 합니다. \n적절한 깊이에 도달하면, 리프터는 남은 한쪽 발꿈치를 사용하여 시작 위치로 돌아갑니다. 반대쪽 다리로 이 동작을 반복하는 것을 잊지 마세요.",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo006',
        title: "덤벨 숄더 프레스",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "덤벨 로우 플라이",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "덤벨 레터럴 런지",
        content: "     ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "덤벨 킥 백",
        content: "      ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "덤벨 인클라인 로우",
        content: "       ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "덤벨 시티드 컬",
        content: "        ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "덤벨",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo006',
        title: "바벨 벤치 프레스",
        content: "이 운동은 벤치에 누워 가슴 근육을 사용하여 바벨을 위아래로 들어 올리는 운동입니다. 상체 근력과 근육량을 키우는 데 널리 사용되는 운동입니다.",
        imgPath: '/images/barbell_bench_press.jpg',
        tool: "바벨",
        area: "가슴",
        level: 2,
        fav: false
    },
    {
        id: 'wo007',
        title: "바벨 런지",
        content: "바벨 런지는 하체, 특히 대퇴사두근, 햄스트링, 그리고 둔근을 강화하는 근력 운동입니다. 한쪽 다리를 앞으로 내딛고 뒷다리 무릎이 바닥에 거의 닿을 때까지 몸을 낮춘 후, 다시 시작 자세로 돌아오는 동작입니다. 바벨을 어깨에 걸치거나 덤벨을 양옆에 들고 할 수 있습니다.",
        imgPath: '/images/barbell_lunge.jpg',
        tool: "바벨",
        area: "엉덩이, 허벅지",
        level: 2,
        fav: false
    },
    {
        id: 'wo008',
        title: "바벨 슈러그",
        content: "이 운동은 바벨을 앞에 들고 서서 어깨를 귀까지 들어 올렸다가 다시 내리는 동작입니다. 주로 등 위쪽의 승모근을 단련하는 운동이며, 다양한 무게와 반복 횟수로 수행할 수 있습니다.",
        imgPath: '/images/barbell_shrug.jpg',
        tool: "바벨",
        area: "등, 승모",
        level: 2,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 데드리프트",
        content: "   ",
        imgPath: '/images/barbell_deadlift.jpg',
        tool: "바벨",
        area: "엉덩이, 등",
        level: 3,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 올림픽 스쿼트",
        content: "이 운동은 무게가 실린 바벨을 어깨에 얹고 허벅지가 바닥과 평행이 될 때까지 스쿼트했다가 다시 일어서는 동작입니다. 주로 대퇴사두근, 둔근, 그리고 햄스트링을 단련합니다.",
        imgPath: '/images/barbell_olympic_squat.jpg',
        tool: "바벨",
        area: "허벅지",
        level: 2,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 오버헤드 캐리",
        content: "이 운동은 걷는 동안 바벨을 머리 위로 들고 하는 운동입니다. 주로 어깨, 상체, 코어 근육을 단련하는 데 효과적입니다. 컨디셔닝 운동이나 어깨 안정성 및 근력 향상을 위한 운동으로 활용될 수 있습니다.",
        imgPath: '/images/barbell_overhead_carry.jpg',
        tool: "바벨",
        area: "허벅지",
        level: 2,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 컬",
        content: "이 운동은 양손으로 바벨을 들어 올리는 운동입니다. 팔을 뻗은 상태에서 팔꿈치는 고정한 채 바벨을 어깨 쪽으로 말아 올리는 동작입니다. 주로 이두근을 단련합니다.",
        imgPath: '/images/barbell_curl.jpg',
        tool: "바벨",
        area: "이두",
        level: 2,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 손목 컬",
        content: "This exercise involves holding a barbell with palms facing down and curling the wrists upwards while resting them on a bench. It primarily targets the forearm muscles and can help improve grip strength.",
        imgPath: '/images/barbell_wrist_curl.jpg',
        tool: "바벨",
        area: "전완, 손목",
        level: 2,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 스텝업",
        content: "이 운동은 바벨을 어깨에 걸치고 플랫폼이나 벤치에 올라가는 동작입니다. 주로 대퇴사두근, 둔근, 햄스트링을 단련하는 동시에 코어 근육을 강화하고 균형감과 안정성을 향상시킵니다.",
        imgPath: '/images/barbell_stepup.jpg',
        tool: "바벨",
        area: "엉덩이",
        level: 2,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 랙 풀",
        content: "이 운동은 랙에서 바벨을 무릎 높이까지 들어 올리고, 넓은 그립으로 엉덩이 쪽으로 당겨 올리는 운동입니다. 주로 광배근, 승모근, 척추기립근을 포함한 등 근육을 단련합니다.",
        imgPath: '/images/barbell_deadlift.jpg',
        tool: "바벨",
        area: "엉덩이, 등",
        level: 3,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 리어 런지",
        content: "리프터는 바 뒤에 앉아 바가 다리에 거의 닿도록 합니다 . 발은 앞을 향하게 합니다.\n그런 다음 엉덩이를 굽히고 무릎을 구부려 발바닥을 편평하게 유지한 채 정강이를 앞으로 움직여 바벨을 만지지만 밀어내지 않도록 합니다.리프터는 어깨 너비 정도로 다리 바깥쪽에서 막대를 잡습니다. \n다음으로 그는 들어올리는 동안 척추를 중립으로 유지할 수 있는 위치까지 가슴을 들어 올립니다.그런 다음 바벨을 내립니다.",
        imgPath: '/images/barbell_deadlift.jpg',
        tool: "바벨",
        area: "엉덩이, 등",
        level: 3,
        fav: false
    },
    {
        id: 'wo009',
        title: "바벨 리버스 컬",
        content: "   ",
        imgPath: '/images/barbell_deadlift.jpg',
        tool: "바벨",
        area: "엉덩이, 등",
        level: 3,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 벤치프레스",
        content: "이 운동은 벤치에 누워 랙에서 바벨을 들어 올려 가슴까지 내린 후, 다시 시작 위치로 밀어 올리는 동작입니다. 바벨은 고정된 트랙에 고정되어 있어 동작 중 안정성과 제어력을 높여줍니다.",
        imgPath: '/images/smith_bench_press.jpg',
        tool: "스미스머신",
        area: "가슴",
        level: 1,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 벤트 오버 로우",
        content: "이 운동은 바벨이나 덤벨을 손에 든 채 허리를 굽혀 가슴 쪽으로 당겨 올리는 운동으로, 등과 팔 근육을 단련하는 데 효과적입니다. 근력 운동이나 보디빌딩 프로그램에서 상체 근력을 강화하고 자세를 교정하는 데 흔히 사용됩니다.",
        imgPath: '/images/smith_bentover_row.jpg',
        tool: "스미스머신",
        area: "등",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 데드리프트",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 드래그 컬",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 프론트 스쿼트",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 힙 스러스트",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 레그 프레스",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 머신 바이셉 컬",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 인클라인 벤치 프레스",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 클로즈 그립 벤치 프레스",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 체어 스쿼트",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스미스 디클라인 벤치 프레스",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "스미스머신",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 크로스오버",
        content: "이 운동은 케이블 머신을 사용하여 가슴 근육을 집중적으로 자극하는 크로스오버 동작을 하는 운동입니다. 가슴의 다양한 부위를 자극하기 위해 케이블의 높이나 동작 각도를 조절하는 변형 운동도 가능합니다.",
        imgPath: '/images/cable_crossover.jpg',
        tool: "케이블",
        area: "가슴",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 디클라인 플라이",
        content: "이 운동은 디클라인 벤치에 누워 케이블 머신을 사용하여 가슴 근육을 집중적으로 단련하는 플라이 동작을 하는 것입니다. 디클라인 각도는 가슴 아랫부분에 더 많은 자극을 줍니다.",
        imgPath: '/images/cable_decline_fly.jpg',
        tool: "케이블",
        area: "가슴",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 벤치 프레스",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 클로즈 그립 컬",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 데드리프트",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 드래그 컬",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 포워드 런지",
        content: "   ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 포워드 레이즈",
        content: " ",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 프런트 레이즈",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 원암 풀다운",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 원암 리버스 플라이",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "케이블 오버헤드 컬",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "케이블",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "파이크 푸쉬업",
        content: "이 운동은 팔굽혀펴기의 변형으로, 손을 서로 가까이 모으고 몸을 역V자 모양으로 만듭니다. 주로 어깨와 삼두근을 단련합니다.",
        imgPath: '/images/pike_pushup.jpg',
        tool: "맨몸",
        area: "어깨",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "플랭크 잭",
        content: "이 운동은 플랭크 자세에서 시작하여 두 발을 옆으로 뻗었다가 다시 안으로 넣는 동작으로, 마치 점핑잭 동작과 비슷합니다. 코어, 어깨, 다리를 단련하는 데 효과적입니다.",
        imgPath: '/images/plank_jack.jpg',
        tool: "맨몸",
        area: "허리",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "플랭크",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "푸쉬업",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "풀업",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "스쿼트",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "와이드 스쿼트",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "런지",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "크로스 런지",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "크런치",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "딥스",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    },
    {
        id: 'wo005',
        title: "브릿지",
        content: "",
        imgPath: '/images/dumbbell_bulgarian_split_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2,
        fav: false
    }
];

export default workoutData;