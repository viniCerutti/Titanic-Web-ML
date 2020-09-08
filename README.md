# Titanic-Web-ML

O Objetivo deste projeto era realizar o desenvolvimento completo de um projeto de machine learning, desde a análise exploratoria de dados até o deploy do modelo de machine learning na web. Como novos conhecimentos obtidos: uso do react como framework de frontend e a realização do deploy do webapp com o uso do heroku. 

Como resultado um WebApp no qual utiliza um modelo de regressão logística para classificar se o usuário irá sobreviver ou não ao desastre do titanic de acordo com suas informações inseridas.



### Ferramentas: ###
* [Backend](https://github.com/viniCerutti/Titanic-Web-ML/tree/master/server): [Flask](https://flask.palletsprojects.com/en/1.1.x/) 
* [Frontend](https://github.com/viniCerutti/Titanic-Web-ML/tree/master/client): [React](https://reactjs.org/)
* Deploy: [heroku](https://www.heroku.com/)

### Dataset ###
https://www.kaggle.com/c/titanic
### Análise Exploratória ###
Foi utilizado a ferramenta Jupyter-notebook com Python para análise exploratória e percebe-se que: passageiros do gênero feminino tiveram uma maior chance de sobrevivência. Além disso, passageiros da terceira classe ou que embarcaram pela entrada Southampton não tiveram essa mesma oportunidade de sobreviver. Como modelo de predição, foi utilizado o modelo de [Regressão Logística](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html#sklearn.linear_model.LogisticRegression)

### Deploy ###
O webapp está disponível em: https://titanic-web-ml.herokuapp.com/
