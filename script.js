  const API_KEY = 'd726a1ef21070cf0c1085e83aa0bf9e2';
        let weatherData = null;

        function getDevCondition(condition, icon) {
            const conditionLower = condition.toLowerCase();
            const iconCode = icon?.slice(0, 2);
            
            if (iconCode === '01') return { text: '☀️ Código Compilando', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.2)' };
            if (iconCode === '02') return { text: '🌤️ Testes Passando', color: '#93c5fd', bg: 'rgba(147, 197, 253, 0.2)' };
            if (iconCode === '03' || iconCode === '04') return { text: '☁️ Refatoração Necessária', color: '#9ca3af', bg: 'rgba(156, 163, 175, 0.2)' };
            if (iconCode === '50') return { text: '🌫️ Documentação Confusa', color: '#d1d5db', bg: 'rgba(209, 213, 219, 0.2)' };
            if (iconCode === '09' || iconCode === '10') return { text: '🌧️ Bugs Conhecidos', color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.2)' };
            if (iconCode === '11') return { text: '⛈️ Sistema Instável', color: '#c084fc', bg: 'rgba(192, 132, 252, 0.2)' };
            if (iconCode === '13') return { text: '❄️ Sistema Travado', color: '#67e8f9', bg: 'rgba(103, 232, 249, 0.2)' };
            
            if (conditionLower.includes('clear') || conditionLower.includes('sun')) {
                return { text: '☀️ Código Compilando', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.2)' };
            }
            if (conditionLower.includes('cloud')) {
                return { text: '☁️ Refatoração Necessária', color: '#9ca3af', bg: 'rgba(156, 163, 175, 0.2)' };
            }
            if (conditionLower.includes('rain')) {
                return { text: '🌧️ Bugs Conhecidos', color: '#60a5fa', bg: 'rgba(96, 165, 250, 0.2)' };
            }
            
            return { text: '🌤️ Testes Passando', color: '#93c5fd', bg: 'rgba(147, 197, 253, 0.2)' };
        }

        function getBugRisk(humidity) {
            if (humidity <= 40) return { text: 'Baixo', color: '#4ade80' };
            if (humidity <= 60) return { text: 'Moderado', color: '#fbbf24' };
            if (humidity <= 80) return { text: 'Alto', color: '#fb923c' };
            return { text: 'Crítico', color: '#f87171' };
        }

        function getTechDebt(humidity) {
            if (humidity <= 30) return { text: 'Mínimo', color: '#4ade80' };
            if (humidity <= 60) return { text: 'Moderado', color: '#fbbf24' };
            if (humidity <= 80) return { text: 'Elevado', color: '#fb923c' };
            return { text: 'Crítico', color: '#f87171' };
        }

        function getTraffic(windSpeed) {
            if (windSpeed <= 10) return { text: 'Calmo', color: '#4ade80' };
            if (windSpeed <= 30) return { text: 'Normal', color: '#60a5fa' };
            if (windSpeed <= 50) return { text: 'Intenso', color: '#fb923c' };
            return { text: 'Sobrecarga', color: '#f87171' };
        }

        function getCodeQuality(pressure) {
            if (pressure >= 1020) return { text: 'Excelente', color: '#4ade80' };
            if (pressure >= 1010) return { text: 'Boa', color: '#fbbf24' };
            if (pressure >= 1000) return { text: 'Precisa Refatorar', color: '#fb923c' };
            if (pressure >= 990) return { text: 'Legacy Critical', color: '#f87171' };
            return { text: 'Reescrever Tudo', color: '#dc2626' };
        }

        function getCPUStatus(temp) {
            if (temp > 30) return { text: '🔥 CPU: Superaquecimento', color: '#f87171' };
            if (temp >= 20) return { text: '🌡️ CPU: Performance Normal', color: '#4ade80' };
            return { text: '❄️ CPU: Sistema Ocioso', color: '#67e8f9' };
        }

        function showError(message) {
            const errorEl = document.getElementById('errorMessage');
            errorEl.textContent = message;
            errorEl.classList.remove('hidden');
        }

        function hideError() {
            document.getElementById('errorMessage').classList.add('hidden');
        }

        function showLoading() {
            document.getElementById('loading').classList.remove('hidden');
            document.getElementById('weatherContent').classList.add('hidden');
        }

        function hideLoading() {
            document.getElementById('loading').classList.add('hidden');
        }

        function updateUI(data) {
            weatherData = data;
            
            const condition = getDevCondition(data.weather[0].description, data.weather[0].icon);
            const bugRisk = getBugRisk(data.main.humidity);
            const techDebt = getTechDebt(data.main.humidity);
            const traffic = getTraffic(data.wind.speed * 3.6);
            const codeQuality = getCodeQuality(data.main.pressure);
            const cpuStatus = getCPUStatus(data.main.temp);

            document.getElementById('locationName').textContent = `${data.name}, ${data.sys.country}`;
            
            const mainCard = document.getElementById('mainCard');
            mainCard.style.background = condition.bg;
            
            const conditionEl = document.getElementById('conditionText');
            conditionEl.textContent = condition.text;
            conditionEl.style.color = condition.color;
            
            document.getElementById('weatherDesc').textContent = data.weather[0].description;
            
            const tempEl = document.getElementById('tempMain');
            tempEl.textContent = `${Math.round(data.main.temp)}°C`;
            tempEl.style.color = cpuStatus.color;
            
            const cpuEl = document.getElementById('cpuStatus');
            cpuEl.textContent = cpuStatus.text;
            cpuEl.style.color = cpuStatus.color;
            
            document.getElementById('feelsLike').textContent = `Sensação: ${Math.round(data.main.feels_like)}°C`;
            
            const bugRiskEl = document.getElementById('bugRisk');
            bugRiskEl.textContent = bugRisk.text;
            bugRiskEl.style.color = bugRisk.color;
            
            const techDebtEl = document.getElementById('techDebt');
            techDebtEl.textContent = techDebt.text;
            techDebtEl.style.color = techDebt.color;
            document.getElementById('humidity').textContent = `Umidade: ${data.main.humidity}%`;
            
            const trafficEl = document.getElementById('traffic');
            trafficEl.textContent = traffic.text;
            trafficEl.style.color = traffic.color;
            document.getElementById('windSpeed').textContent = `Vento: ${Math.round(data.wind.speed * 3.6)} km/h`;
            
            const qualityEl = document.getElementById('codeQuality');
            qualityEl.textContent = codeQuality.text;
            qualityEl.style.color = codeQuality.color;
            document.getElementById('pressure').textContent = `Pressão: ${data.main.pressure} hPa`;
            
            document.getElementById('minMax').textContent = `${Math.round(data.main.temp_min)}° / ${Math.round(data.main.temp_max)}°`;
            document.getElementById('visibility').textContent = `${(data.visibility / 1000).toFixed(1)} km`;
            document.getElementById('sunrise').textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            document.getElementById('sunset').textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            
            document.getElementById('weatherContent').classList.remove('hidden');
        }

        async function fetchWeather(cityName) {
            if (!cityName.trim()) {
                showError('Por favor, digite o nome de uma cidade');
                return;
            }

            hideError();
            showLoading();
            document.getElementById('searchButton').disabled = true;

            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric&lang=pt_br`;
                console.log('Buscando:', url);
                
                const response = await fetch(url);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('Cidade não encontrada. Verifique o nome e tente novamente.');
                    } else if (response.status === 401) {
                        throw new Error('Erro de autenticação. Verifique sua API Key.');
                    } else {
                        throw new Error(`Erro ${response.status}: ${response.statusText}`);
                    }
                }

                const data = await response.json();
                console.log('Dados recebidos:', data);
                updateUI(data);
            } catch (err) {
                console.error('Erro:', err);
                showError(err.message || 'Erro ao buscar dados do clima. Verifique sua conexão.');
                document.getElementById('weatherContent').classList.add('hidden');
            } finally {
                hideLoading();
                document.getElementById('searchButton').disabled = false;
            }
        }

        document.getElementById('searchButton').addEventListener('click', () => {
            const city = document.getElementById('searchInput').value;
            fetchWeather(city);
        });

        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const city = document.getElementById('searchInput').value;
                fetchWeather(city);
            }
        });

        fetchWeather('São Paulo');