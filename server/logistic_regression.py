import pickle

class LogisticModel():

	def __init__(self, model):
		self.model = pickle.load(open(model,'rb'))

	def __pre_processing__(self,x):
		print(x)
		data = []
		sex = 0 if x["sex"].lower()=="male" else 1
		embarked = [1,0]
		if x["embarked"] == "S":
			embarked = [0,1]
		elif x["embarked"] == "C":
			embarked = [0,0]

		data = [x["pclass"],x["age"],x["sibsp"],x["parch"],x["fare"],sex,*embarked]
		return data
		
	def predict(self, x):
		print(x)
		data = self.__pre_processing__(x)
		value = self.model.predict([data])
		percentage = self.model.predict_proba([data])
		return {"value":"YES" if value== 1 else "NO","percentage":percentage[0][int(value)]}